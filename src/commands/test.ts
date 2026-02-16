import { Declare, Command, CommandContext } from "seyfert";
import Exploration from "../system/services/Exploration";

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
        const service = new Exploration();
        const resources = service.getResources("pickaxe", "mine_t1");

        ctx.write({ content: `a` });

        console.log(resources);
    }
}
