import { getLatestCrypto } from "./crypto";
import { getLatestFiat } from "./fiat";

export async function getCurrency() {
  const crypto = await getLatestCrypto();
  const fiat = await getLatestFiat();
  
  return {
    crypto,
    fiat
  }
}
