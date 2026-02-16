// import { drizzle } from "drizzle-orm/node-postgres";
import { PickaxeZones } from "#zones/PickaxeZones.js";
type ToolType = "pickaxe";
export default class Exploration {
    // private db = drizzle(process.env.POSTGRESQL_URL!);

    constructor() {}

    public getResources(tool: ToolType, zoneId: string) {
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
