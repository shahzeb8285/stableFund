import defaultCoins from '@/Config/Coins/coins'
import { getCryptoPrices } from '@/Utils/Coingecko'
import axios from 'axios'
export const getNativeCoinPrice = async coin => {}

const loadPriceHistory = async id => {
  const URL = `https://api.binance.com/api/v3/klines?symbol=${id.toUpperCase()}USDT&interval=1d&limit=50`

  // return
  const resp = await axios.get(URL)

  const data = resp.data.map(interval => parseFloat(interval[4]))
  return data
}
export const fetchCoinData = async () => {
  const ids = []

  const defaultCoinData = []

  for (let defaultCoin of defaultCoins) {
    ids.push(defaultCoin.id)
  }

  const nativeCoinsPrices = await getCryptoPrices(ids)
  for (let defaultCoin of defaultCoins) {
    const data = nativeCoinsPrices[defaultCoin.id]
    const priceHistory = await loadPriceHistory(defaultCoin.symbol)
    let price = null
    let change24Hours = null
    if (data) {
      price = data.usd
      change24Hours = data.usd_24h_change.toFixed(2)
    }

    const coin = {
      ...defaultCoin,
      price,
      change24Hours,
      priceHistory,
    }
    defaultCoinData.push(coin)
  }

  return [...defaultCoinData]
}
