import {
    type ParseClient,
    type ParseMiddlewares,
    type ParseGlobalMiddlewares,
    Client,
} from "seyfert";
import Redis from "./system/Redis";
import { global } from "./system/middlewares/middlewares";

declare module "seyfert" {
    interface UsingClient extends ParseClient<Client<true>> {}
    interface RegisteredMiddlewares extends ParseMiddlewares<typeof global> {}
    interface GlobalMetadata extends ParseGlobalMiddlewares<typeof global> {}

    interface UsingClient {
        redis: Redis;
    }
    interface ExtraProps {
        cooldown?: number;
    }
}
