// import { drizzle } from "drizzle-orm/node-postgres";
import { Zone } from "#interfaces/zone";
import { Item } from "#interfaces/items";

export default class Exploration {
    // private db = drizzle(process.env.POSTGRESQL_URL!);

    constructor() {}

    public async generateResources(zone: Zone) {
        return zone.resources
            .map((item) => {
                if (Math.floor(Math.random() * 100) < item.probability) {
                    const returnableItem = { ...item.item };
                    returnableItem.amount =
                        Math.floor(Math.random() * item.probability) + 1;
                    return returnableItem as Item;
                } else return false;
            })
            .filter((x) => x != false);
    }
}
