
const CONFIG = [
    // {
    //     id:1,
    //     chainID:97,
    //     contract:"0x0C55B4c855Da7574aeFf8f22f74Bd11Ab73cf1FB",
    //     isCoin:true,
    //     stakingToken:{
        
    //         address:"0x0000000000000000000000000000000000000000",
    //         decimals:18,
    //         name:"BNB",
    //         balance:0,
    //         image:require("../../Assets/Icons/BNB.png"),
    //         allowance:0,
    //     }
    // },
    // {
    //     id:6,
    //     chainID:97,
    //     contract:"0x7249DE1fe6f535f4BEdf8b37B93f95a66A96f38a",
    //     isCoin:false,
    //     stakingToken:{
    //         address:"0x983889f814505f680c0dd7Ad4CA57E57228Ba955",
    //         decimals:18,
    //         name:"BUSD",
    //         balance:0,
    //         image:require("../../Assets/Icons/MATIC.png"),
    //         allowance:0,
    //     }
    // },



    {
        id:1,
        chainID:56,
        contract:"0xA561F153A32c70Fc9613317719e7B71a7F1DC70e",
        isCoin:false,
        stakingToken:{
            address:"0xe9e7cea3dedca5984780bafc599bd69add087d56",
            decimals:18,
            name:"BUSD",
            additionalName:"BUSD",
            balance:0,
            image:require("../../Assets/Icons/BUSD.png"),
            allowance:0,
        }
    },
    {
        id:2,
        chainID:56,
        contract:"0x067107304A6511C0A778Ad7B6f2785aa24bBDBd2",
        isCoin:false,
        stakingToken:{
            address:"0x55d398326f99059ff775485246999027b3197955",
            decimals:18,
            name:"USDT",
            additionalName:"USDT (Binance)",

            balance:0,
            image:require("../../Assets/Icons/USDT.png"),
            allowance:0,
        }
    },

    {
        id:3,
        chainID:137,
        contract:"0xA561F153A32c70Fc9613317719e7B71a7F1DC70e",
        isCoin:false,
        stakingToken:{
            address:"0xc029dc0b3b40cd128ed86505353af74ecb8ddd1f",
            decimals:6,
            name:"USDC",
            additionalName:"USDC (Polygon)",

            balance:0,
            image:require("../../Assets/Icons/USDC.png"),
            allowance:0,
        }
    },

    {
        id:4,
        chainID:1,
        contract:"0x420206ad20526578ec9a4a6b3b8fb25160470e49",
        isCoin:false,
        stakingToken:{
            address:"0xdac17f958d2ee523a2206206994597c13d831ec7",
            decimals:6,
            name:"USDT",
            additionalName:"USDT (Ethereum)",

            balance:0,
            image:require("../../Assets/Icons/USDT.png"),
            allowance:0,
        }
    },
]


const payloadData = {
    tvl:0,
    totalBonus:0,
    totalInvestor:0,
    isOpen:false,
    userData:{
        investments:[],
        totalReferrers:0,
        totalJoiningComissionEarnt:0,
    }
}


const preLoaded = CONFIG.map((config)=>{
    return {...config,...payloadData}
})

export default preLoaded