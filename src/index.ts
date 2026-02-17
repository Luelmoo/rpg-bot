import { Client, UsingClient } from "seyfert";
import Redis from "./system/Redis.js";
import { global } from "./system/middlewares/middlewares.js";
import "dotenv/config";

const globalMiddlewares: (keyof typeof global)[] = ["cooldown"];

const client = new Client({
    commands: {
        defaults: {
            props: {
                cooldown: 5,
            },
        },
    },
    globalMiddlewares,
}) as UsingClient & Client;

client.setServices({
    middlewares: { ...global },
});

client.redis = new Redis();

async function main() {
    await client.redis.connect();
}

main();
client.start().then(async () => {
    await client
        .uploadCommands({
            applicationId: process.env.DISCORD_APP_ID,
            cachePath: "./commands.json",
        })
        .catch((error) => console.log(error));
});
