
// import "@ethersproject/shims/dist/index.js";
import '@ethersproject/shims';
import { Wallet } from '@ethersproject/wallet';
import { entropyToMnemonic, randomBytes,hexlify,defaultPath } from 'ethers/lib/utils';
const bip39 = require('bip39');
import HDKey from 'hdkey';


export  const CreateNewWallet = async()=>{




    const entropy = randomBytes(16)
    const mnemonic = entropyToMnemonic(entropy);
    const hdkey = HDKey.fromMasterSeed(bip39.mnemonicToSeedSync(mnemonic));
    const derivedNode = hdkey.derive(defaultPath);
    const privateKey =hexlify(derivedNode.privateKey);
    const { address } = new Wallet(privateKey);
    const obj = {
        address,
        mnemonic:mnemonic.split(" "),
        privateKey
      }
    return obj
}


export  const RestoreWallet = async(mnemonic)=>{
  const hdkey = HDKey.fromMasterSeed(bip39.mnemonicToSeedSync(mnemonic));
  const derivedNode = hdkey.derive(defaultPath);
  const privateKey =hexlify(derivedNode.privateKey);
  const { address } = new Wallet(privateKey);
  const obj = {
      address,
      mnemonic:mnemonic.split(" "),
      privateKey
    }

return obj
}