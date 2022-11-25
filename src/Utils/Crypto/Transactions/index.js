

import "@ethersproject/shims";
import {JsonRpcProvider,StaticJsonRpcProvider} from "@ethersproject/providers"
import {Wallet} from "@ethersproject/wallet"
import { Contract } from "@ethersproject/contracts";
import RPCList from "./RPCs.json"

import ERC20 from "./ERC20.json";
import CoinStakingABI from "../../../Config/Staking/CoinStakingABI.json";
import TokenStakingABI from "../../../Config/Staking/TokenStakingABI.json";


export const getRPC = (chainId) =>{
    const rpcs = RPCList[chainId]
    if(rpcs){
        return rpcs[Math.floor(Math.random()*rpcs.length)];
    }
} 

export const getERC20Contract =async(chainId,privateKey,contractAddress)=>{
    const rpc = getRPC(chainId)
    const provider = new JsonRpcProvider(
        rpc
      );
   
    const wallet = new Wallet(privateKey);
    let signer = wallet.connect(provider)

    
    let contract = new Contract(contractAddress, ERC20, signer);
    return {signer,contract,provider}

}

export const getStakingContract =async(info,privateKey)=>{
    const rpc = getRPC(info.chainID)
    const provider = new JsonRpcProvider(
        rpc
      );
   
    const wallet = new Wallet(privateKey);
    let signer = wallet.connect(provider)
    let contract = new Contract(info.contract, info.isCoin?CoinStakingABI:TokenStakingABI, signer);
    return {signer,contract,provider}

}