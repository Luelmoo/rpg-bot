import * as t from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const usersTable = t.pgTable(
    "users",
    {
        id: t.integer().primaryKey(),
        discord_id: t.varchar({ length: 25 }).notNull(),
        level: t.integer().default(1).notNull(),
        xp: t.integer().default(0).notNull(),
        plate_coins: t.integer().default(0).notNull(),
        gold_coins: t.integer().default(0).notNull(),
        createdAt: t.timestamp({ withTimezone: true }).defaultNow().notNull(),
        updatedAt: t.timestamp({ withTimezone: true }).defaultNow().notNull(),
    },
    (table) => [
        { discord_idIdx: t.index("users_discord_id_idx").on(table.discord_id) },
    ],
);

export const explorationTable = t.pgTable(
    "explorations",
    {
        discord_id: t.varchar({ length: 25 }).notNull().unique(),
        start_time: t.timestamp().defaultNow().notNull(),
        end_time: t.timestamp({ withTimezone: true }).notNull(),
        channel_id: t.varchar({ length: 30 }).notNull(),
        status: t.varchar().default("exploring").notNull(),
    },
    (table) => [
        { statusIdx: t.index("status_idx").on(table.status) },
        { end_timeIdx: t.index("end_time_idx").on(table.end_time) },
    ],
    // (table) => ({
    //     statusIdx: t.index("status_idx").on(table.status),
    //     endTimeIdx: t.index("end_time_idx").on(table.end_time),
    // }),
);

export const inventoryTable = t.pgTable(
    "inventorys",
    {
        discord_id: t.varchar({ length: 25 }).notNull(),
        item_id: t.varchar({ length: 50 }).notNull(),
        amount: t.integer().default(0).notNull(),
    },
    (table) => [
        {
            discord_idIdx: t
                .index("inventorys_discord_id_idx")
                .on(table.discord_id),
        },
        {
            item_idIdx: t.index("inventorys_item_id_idx").on(table.item_id),
        },
    ],
);

/* RELACIONES */

export const usersRelations = relations(usersTable, ({ one }) => ({
    exploration: one(explorationTable, {
        fields: [usersTable.discord_id],
        references: [explorationTable.discord_id],
    }),
    inventory: one(inventoryTable, {
        fields: [usersTable.discord_id],
        references: [inventoryTable.discord_id],
    }),
}));

export const explorationRelations = relations(explorationTable, ({ one }) => ({
    user: one(usersTable, {
        fields: [explorationTable.discord_id],
        references: [usersTable.discord_id],
    }),
}));

export const inventoryRelations = relations(inventoryTable, ({ one }) => ({
    user: one(usersTable, {
        fields: [inventoryTable.discord_id],
        references: [usersTable.discord_id],
    }),
}));
