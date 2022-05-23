export type Currency = {
  code: string,
  name: string | null,
  date: string,
  quote: {
    name: string,
    price: string
  }[]
}

export type DailyItems = {
  crypto: Currency[] | null,
  fiat: Currency[] | null
}
