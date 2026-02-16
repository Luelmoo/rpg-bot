import { Declare, Command, CommandContext } from "seyfert";
import Exploration from "../system/services/Exploration";

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
        const service = new Exploration();

        console.log(service.getResources("pickaxe", "mine_t1"));
    }
}
