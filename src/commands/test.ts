import { Declare, Command, CommandContext } from "seyfert";

@Declare({
    name: "test",
    description: "Test command",
    integrationTypes: ["GuildInstall"],
    props: {
        cooldown: 1,
    },
})
export default class TestCommand extends Command {
    async run(ctx: CommandContext) {
        ctx.write({ content: `a` });
    }
}
