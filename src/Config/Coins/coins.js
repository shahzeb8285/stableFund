import defaultCoins from './defaultCoins'
import nativeCoins from './nativeTokens'

const processedNativeCoins = () => {
  const coins = []
  for (let coin of nativeCoins) {
    coins.push({ ...coin, supported: true, native: true })
  }


  return coins
}
const coins = [...defaultCoins, ...processedNativeCoins()]

export default coins


export {default as defaultCoins} from "./defaultCoins"
export {default as nativeCoins} from "./nativeTokens"
