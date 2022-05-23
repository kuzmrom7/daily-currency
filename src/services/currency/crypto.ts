import axios from "axios";
import config from '../../config';
import { Currency } from "../../types";

export async function getLatestCrypto(): Promise<Currency[] | null> {
  try {
    const url = `${config.COIN_MARKET_HOST}/v1/cryptocurrency/listings/latest`;

    const resp = await axios.get(url, {
      headers: {
        'X-CMC_PRO_API_KEY': config.COIN_MARKET_API_KEY,
      },
    });
    const date = await resp.data.status.timestamp;

    const data: Currency[] = await resp.data.data
      .filter((i) => config.CRYPTO_CURR.includes(i.symbol))
      .map(i => ({
        code: i.symbol,
        name: i.name,
        date: date,
        quote: [{
          name: "USD",
          price: i.quote.USD.price.toFixed(2)
        }]
      }));

    return data;
  } catch (error) {
    return null;
  }
}
