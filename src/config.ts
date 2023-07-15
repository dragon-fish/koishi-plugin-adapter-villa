import { type Bot, Schema } from "koishi";

export interface VillaBotConfig extends Bot.Config {
  id: string;
  secret: string;
  path: string;
  pubKey?: string;
  transfer: {
    maxRetries: number;
  };
}
export const VillaBotConfig: Schema<VillaBotConfig> = Schema.object({
  id: Schema.string().description("bot_id: 机器人的唯一标志").required(),
  secret: Schema.string()
    .description("bot_secret: 机器人鉴权唯一标志")
    .required(),
  path: Schema.string().description("服务器监听的路径").default("/villa"),
  pubKey: Schema.string().description("机器人的公钥"),
  transfer: Schema.object({
    maxRetries: Schema.number().description("最大重试次数").default(3),
  }).required(),
});
