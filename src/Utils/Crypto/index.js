
import "@ethersproject/shims/dist/index.js";
import { ethers ,utils} from 'ethers';
const bip39 = require('bip39');
import HDKey from 'hdkey';


export  const CreateNewWallet = async()=>{
    const entropy = ethers.utils.randomBytes(16);
    const mnemonic = ethers.utils.entropyToMnemonic(entropy);
    const hdkey = HDKey.fromMasterSeed(bip39.mnemonicToSeedSync(mnemonic));
    const derivedNode = hdkey.derive(ethers.utils.defaultPath);
    const privateKey = ethers.utils.hexlify(derivedNode.privateKey);
    const { address } = new ethers.Wallet(privateKey);
    const obj = {
        address,
        mnemonic:mnemonic.split(" "),
        privateKey
      }
    return obj
}


export  const RestoreWallet = async(mnemonic)=>{
  const hdkey = HDKey.fromMasterSeed(bip39.mnemonicToSeedSync(mnemonic));
  const derivedNode = hdkey.derive(ethers.utils.defaultPath);
  const privateKey = ethers.utils.hexlify(derivedNode.privateKey);
  const { address } = new ethers.Wallet(privateKey);
  const obj = {
      address,
      mnemonic:mnemonic.split(" "),
      privateKey
    }

return obj
}