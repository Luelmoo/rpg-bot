import { config } from "seyfert";

export default config.bot({
    token: process.env.DISCORD_BOT_TOKEN,
    locations: {
        base: "dist",
        commands: "commands",
    },
    intents: ["Guilds"],
});
