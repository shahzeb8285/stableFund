import { defaultCoins, nativeCoins } from '@/Config/Coins/coins'
import { getCryptoPrices } from '@/Utils/Coingecko'

export const getNativeCoinPrice = async coin => {}

export const fetchCoinData = async () => {
  const ids = []

  const defaultCoinData = []

  for (let defaultCoin of defaultCoins) {
    ids.push(defaultCoin.id)
  }

  const nativeCoinsPrices = await getCryptoPrices(ids)
  for (let defaultCoin of defaultCoins) {
    const data = nativeCoinsPrices[defaultCoin.id]
    let price = null
    let changeIn24Hours = null
    if (data) {
      price = data.usd
      changeIn24Hours = data.usd_24h_change.toFixed(2)
    }

    const coin = {
      ...defaultCoin,
      price,
      changeIn24Hours,
    }
    defaultCoinData.push(coin)
  }

  const nativeCoinsData = [...nativeCoins]

  return [...defaultCoinData, ...nativeCoinsData]
}
