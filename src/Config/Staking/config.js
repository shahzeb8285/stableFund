
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
    {
        id:2,
        chainID:97,
        contract:"0x7249DE1fe6f535f4BEdf8b37B93f95a66A96f38a",
        isCoin:false,
        stakingToken:{
            address:"0x983889f814505f680c0dd7Ad4CA57E57228Ba955",
            decimals:18,
            name:"BUSD",
            balance:0,
            image:require("../../Assets/Icons/BUSD.png"),
            allowance:0,
        }
    },
]


const payloadData = {
    tvl:0,
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