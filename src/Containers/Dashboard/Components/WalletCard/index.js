import React,{useState} from 'react'
import MyBalance from '../MyBalance'
import NoWallet from '../NoWallet'


const WalletCard = ({navigation,hideAvatar=false}) => {
    const [isWallet, setWallet] = useState(true)

    return <>
    {isWallet ? (
        <MyBalance hideAvatar={hideAvatar} />
          ) : (
            <NoWallet
              onPress={() => {
                navigation.navigate('CreateWalletScreen')
              }}
            />
        )}
    </>
}

export default WalletCard