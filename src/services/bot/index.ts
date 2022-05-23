import config from "../../config";
import { Telegram } from 'telegraf'
import { DailyItems } from "../../types";

const telegram = new Telegram(config.TELEGRAM_BOT_TOKEN);

export function sendMessage(message: string): void {
  telegram.sendMessage(config.TELEGRAM_CHAT_ID, message)
}

export function buildMessage(value: DailyItems): string {
  let crypto = value?.crypto?.map(i => `${i.code} = ${i.quote[0].price} ${i.quote[0].name}`) || [];
  let fiat = value?.fiat?.map(i => `${i.code} = ${i.quote[0].price} ${i.quote[0].name}`) || [];

  const msg = `Crypto:\r\n${crypto.join('\r\n')}\r\n \r\Fiat:\r\n${fiat.join('\r\n')}`;

  return msg;
}
