import { createMiddleware, Formatter } from "seyfert";
import { TimestampStyle } from "seyfert/lib/common";
import { MessageFlags } from "seyfert/lib/types";

export const cooldownMiddleware = createMiddleware<void>(
    async ({ context, next }) => {
        if (context.isChat()) {
            const inCooldown = await context.client.redis.exists(
                `cooldown:${context.fullCommandName}:${context.author.id}`,
            );
            const cooldown = context.command.props.cooldown ?? 5;

            if (inCooldown) {
                await context.write({
                    content: `El comando está recargado. Intenta de nuevo ${Formatter.timestamp(new Date(Date.now() + cooldown * 1000), TimestampStyle.RelativeTime)}`,
                    flags: MessageFlags.Ephemeral,
                });
            } else {
                next();
                await context.client.redis.set(
                    `cooldown:${context.fullCommandName}:${context.author.id}`,
                    cooldown,
                    cooldown,
                );
            }
        }
    },
);
