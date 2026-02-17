// import { drizzle } from "drizzle-orm/node-postgres";
import { PickaxeZones } from "#zones/PickaxeZones.js";
type ToolType = "pickaxe";
import { db } from "#db/index.js";
import { explorationTable } from "#db/schema.js";
import { eq, and, lte } from "drizzle-orm";

export default class Exploration {
    public async checkExplorations() {
        const exploration = await db
            .update(explorationTable)
            .set({ status: "ended" })
            .where(
                and(
                    eq(explorationTable.status, "exploring"),
                    lte(explorationTable.end_time, new Date()),
                ),
            )
            .returning();

        return exploration;

        this.getResources("pickaxe", "mine_t1");
    }

    private getResources(tool: ToolType, zoneId: string) {
        const zones = this.getZonesByTool(tool);
        const zone = zones[zoneId];
        const obtainedItems = [];

        for (const i of zone.resources) {
            const roll = Math.random() * 100;

            if (roll < i.probability) {
                const amount = Math.floor(Math.random() * i.maxAmount) + 1;

                obtainedItems.push({
                    id: i.id,
                    amount,
                });
            }
        }

        return obtainedItems;
    }

    private getZonesByTool(tool: ToolType) {
        switch (tool) {
            case "pickaxe":
                return PickaxeZones;
        }
    }
}

export const explorationService = new Exploration();
