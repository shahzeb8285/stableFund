// import "@ethersproject/shims/dist/index.js";
import {JsonRpcProvider} from "@ethersproject/providers"
import {Wallet} from "@ethersproject/wallet"

import {ethers} from 'ethers';
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";



function useEtherJS({rpcProvider}) {
    const [provider,setProvider] = useState()
    const [signer,setSigner] = useState()
    const user = useSelector(state=>state.user.data)

    const setData = async()=>{
      const _provider = new JsonRpcProvider(rpcProvider);
      setProvider(_provider)
      const _signer = new Wallet(user.wallet.privateKey, provider);
      setSigner(_signer)
    }

  useEffect(() => {

    if(user && rpcProvider){
      setData()
    }
   
    return () => {
        setProvider(null)
        setSigner(null)
    };
  },[rpcProvider,user]);


  return {provider, };
}


export default useEtherJS