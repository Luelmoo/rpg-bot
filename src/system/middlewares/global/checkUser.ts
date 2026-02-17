import { getUser } from "#db/utils.js";
import { createMiddleware } from "seyfert";

export const checkUserMiddleware = createMiddleware<void>(
    async ({ context, next }) => {
        console.log("¿?");

        if (context.isChat()) {
            console.log("¿?");

            const user = await getUser(context.author.id);

            console.log(user);
            console.log(context.fullCommandName !== "start");

            if (!user && context.fullCommandName !== "start ")
                return await context.write({ content: "?" });
            else return next();
        }
    },
);
