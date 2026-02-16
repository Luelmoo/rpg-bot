// import { drizzle } from "drizzle-orm/node-postgres";
import { PickaxeZones } from "#zones/PickaxeZones";
type ToolType = "pickaxe";
export default class Exploration {
    // private db = drizzle(process.env.POSTGRESQL_URL!);

    constructor() {}

    public async getResources(tool: ToolType, zoneId: string) {
        const zones = this.getZonesByTool(tool);
        const zone = zones[zoneId];
        const obtainedItems = [];

        return zone.resources
            .map((i) => {
                if (Math.floor(Math.random() * 100) < i.probability) {
                    return obtainedItems.push({
                        id: i.id,
                        amount: Math.floor(Math.random() * i.maxAmount),
                    });
                } else return false;
            })
            .filter((x) => x != false);
    }

    private getZonesByTool(tool: ToolType) {
        switch (tool) {
            case "pickaxe":
                return PickaxeZones;
        }
    }
}
