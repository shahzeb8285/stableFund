import React, { useEffect, useState } from 'react'
import CryptoPriceList from '@/Config/CryptoPrice'
import axios from 'axios'
export const useCryptoPriceChart = () => {
  const [prices, setPrices] = useState([])
  const loadPriceHistory = async id => {
    const URL = `https://api.binance.com/api/v3/klines?symbol=${id.toUpperCase()}USDT&interval=1d&limit=50`

    // return
    const resp = await axios.get(URL)

    const data = resp.data.map(interval => parseFloat(interval[4]))
    return data
  }

  const loadPriceChange = async id => {
    const URL = `https://api.binance.com/api/v3/ticker/24hr?symbol=${id.toUpperCase()}USDT`
    const resp = await axios.get(URL)

    return {
      price: resp.data.lastPrice,
      change24Hours: Number(resp.data.priceChangePercent),
    }
  }
  const loadAllPrice = async () => {
    const preData = []
    for (let crypto of CryptoPriceList) {
      const priceHistory = await loadPriceHistory(crypto)
      const { price, change24Hours } = await loadPriceChange(crypto)

      preData.push({ name: crypto, priceHistory, price, change24Hours })
    }
    setPrices(preData)
  }

  useEffect(() => {
    loadAllPrice()
  }, [])

  return prices
}
