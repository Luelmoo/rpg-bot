import { Declare, Command, CommandContext } from "seyfert";

@Declare({
    name: "test",
    description: "Test command",
    integrationTypes: ["GuildInstall"],
    props: {
        cooldown: 30,
    },
})
export default class TestCommand extends Command {
    async run(ctx: CommandContext) {
        await ctx.write({
            content: "Lol, comando funcionando",
        });
    }
}
