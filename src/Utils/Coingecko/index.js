import { Config } from "@/Config"
import axios from "axios";


export const getCryptoPrices = async(ids)=>{

    const url = `${Config.COIN_GECKO}/simple/price?ids=${ids.join(",")}&vs_currencies=usd&include_24hr_change=true`;
    
    const resp = await axios.get(url)


    return resp.data

}


export const getSearchResults = async (query)=>{

    const url = `${Config.COIN_GECKO}/search?query=${query}`
    
    const resp = await axios.get(url)


    return resp.data
}