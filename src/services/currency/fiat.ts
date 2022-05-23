import axios from "axios";
import config from "../../config";
import { Currency } from "../../types";

export async function getLatestFiat() : Promise<Currency[] | null>{
  try {
    const url = `${config.CBR_HOST}/latest.js`;

    const resp = await axios.get(url);
    const date = await resp.data.date;

    const data: Currency[] = await Object.keys(resp.data.rates)
      .filter(i => {
        return config.FIAT_CURR.includes(i)
      })
      .map(i => ({
        code: i,
        name: i,
        date: date,
        quote: [{
          name: "RUB",
          price: (1/resp.data.rates[i]).toFixed(2)
        }]
      }));


    return data;
  } catch (error) {
    return null;
  }
}
