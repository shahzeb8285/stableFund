export const trimWallet=(address)=>{
    return `${address.substr(0,4)}....${address.substr(address.length-4)}`
}