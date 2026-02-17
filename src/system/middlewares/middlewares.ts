import { checkUserMiddleware } from "./global/checkUser.js";
import { cooldownMiddleware } from "./global/cooldown.js";

export const global = {
    cooldown: cooldownMiddleware,
    checkUser: checkUserMiddleware,
};
