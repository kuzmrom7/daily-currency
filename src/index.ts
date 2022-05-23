import { getCurrency, sendMessage, buildMessage, startInterval } from "./services";

startInterval(async () => {
  try {
    const currency = await getCurrency();
    const message = buildMessage(currency);

    sendMessage(message);
  } catch (error) {
    console.log(error);
  }
});
