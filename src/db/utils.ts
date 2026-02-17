import { and, eq, sql } from "drizzle-orm";
import { db } from "#db/index.js";
import { inventoryTable, usersTable } from "#db/schema.js";
import { PickaxeResources } from "#items/PickaxeResources.js";

type InventoryItemInput = {
    id: string;
    amount: number;
};

export async function getUser(user_id: string): Promise<boolean> {
    const user = await db
        .select({ discord_id: usersTable.discord_id })
        .from(usersTable)
        .where(eq(usersTable.discord_id, user_id));

    return user ? true : false;
}

export async function addItemsToInventory(
    user_id: string,
    items: InventoryItemInput[],
): Promise<void> {
    for (const i of items) {
        const item = await db
            .select({ item_id: inventoryTable.item_id })
            .from(inventoryTable)
            .where(
                and(
                    eq(inventoryTable.discord_id, user_id),
                    eq(inventoryTable.item_id, i.id),
                ),
            );

        try {
            if (item[0] && PickaxeResources[i.id].stackable) {
                await db
                    .update(inventoryTable)
                    .set({
                        amount: sql`${inventoryTable.amount} + ${i.amount}`,
                    })
                    .where(eq(inventoryTable.discord_id, user_id));
            } else {
                await db.insert(inventoryTable).values({
                    discord_id: user_id,
                    item_id: i.id,
                    amount: i.amount,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
}
