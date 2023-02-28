import Web3Chains from "@/Chains/Web3"
import axios from "axios";


const getAPIUrl =(address,chain)=>{
    return  `https://account.metafi.codefi.network/accounts/${address}?chainId=${chain}&includePrices=true`
}


function getRandomColor() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }
  
export const getMyPortfolio=async (address)=>{
    const portfolio ={}
    for(let chain of Web3Chains){
        if(!chain.testnet){
            const url = getAPIUrl(address,chain.chainId)
            try{
                const resp = await axios.get(url);
                const tokenBalances = [];

                for(let token of resp.data.tokenBalances){
                    tokenBalances.push({
                        ...token,
                        secondaryColor:getRandomColor(),
                        image:token.iconUrl,
                        change24Hours:token.value.pricePercentChange1d
                    })
                }
                const payload = {
                    value:resp.data.value,
                    nativeBalance:resp.data.nativeBalance,
                    tokenBalances:tokenBalances
                }
                portfolio[`${chain.chainId}`] = payload
            }   catch(err){
                // console.error("getMyPortfolio",err,url)
                return null
            }     
        }
   
    }


    return  portfolio

}

