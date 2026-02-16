import { pgTable } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", (t) => ({
    id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
    discord_id: t.varchar({ length: 25 }).notNull(),
    level: t.integer().default(1).notNull(),
    xp: t.integer().default(0).notNull(),
}));
