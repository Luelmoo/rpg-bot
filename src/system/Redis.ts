import { createClient, RedisClientType } from "redis";
import { Logger } from "seyfert";

const logger = new Logger({});

export default class Redis {
    private client: RedisClientType;

    constructor() {
        this.client = createClient({
            socket: {
                host: process.env.REDIS_HOST,
                port: Number(process.env.REDIS_PORT),
            },
        });

        this.client.on("error", (error) => {
            logger.error("Redis error:", error);
        });
    }

    public async connect(): Promise<void> {
        if (!this.client.isOpen) {
            await this.client.connect();
            logger.info("Redis conectado");
        }
    }

    public async get<T>(key: string): Promise<T | null> {
        const value = await this.client.get(key);
        return value ? (JSON.parse(value) as T) : null;
    }

    public async set<T>(
        key: string,
        value: T,
        ttlSeconds?: number,
    ): Promise<void> {
        const serialized = JSON.stringify(value);

        if (ttlSeconds) {
            await this.client.set(key, serialized, {
                expiration: { type: "EX", value: ttlSeconds },
            });
        } else {
            await this.client.set(key, serialized);
        }
    }

    public async exists(key: string): Promise<boolean> {
        return (await this.client.exists(key)) === 1;
    }

    public async disconnect(): Promise<void> {
        if (this.client.isOpen) {
            await this.client.close();
            logger.info("Redis desconectado");
        }
    }
}
