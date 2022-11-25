import React from 'react'
import { useEffect,useState } from 'react'

import { View, Text, Image ,TouchableOpacity} from 'react-native'
import AtomindShimmer from '../AtomindShimmer'
import AtomindText from '../AtomindText'
import { Toggle } from '@ui-kitten/components'
import { useSelector } from 'react-redux'



function formatMoney(number) {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}


const OneTokenSearchRow = ({ coin, onClick }) => {
  const { name, image, symbol,secondaryColor } = coin
  const [myBalance,setBalance] = useState(0)
  const [price,setPrice] = useState(0)
  const [change24Hours,setChange24Hours] = useState(0)
  // const [secondaryColor,setSecondaryColor] = useState("")

  const user = useSelector(state=>state.user.data)

  // useEffect(()=>{
  //   if(!coin.secondaryColor){
  //     setSecondaryColor(getRandomColor())
  //   }else{
  //     setSecondaryColor(coin.secondaryColor)

  //   }
  // },[coin])
  
  useEffect(()=>{
    if(user && user.portfolio){
      const chain = user.portfolio[coin.chainId]
      if(chain && coin.isCoin){
        setBalance( chain.nativeBalance.balance)
        if(coin.price){
          setPrice(coin.price)
        }
        setChange24Hours(coin.change24Hours)
      }else{
        setBalance( coin.balance)
        if(coin && coin.value.price){
          setPrice(coin.value.price)

        }
        setChange24Hours(coin.value.pricePercentChange1d)

      }


    }
  },[coin,user])
  return (
    <TouchableOpacity
      onPress={() => {
        if (onClick) {
          onClick()
        }
      }}
      style={{
        paddingVertical: 10,
        borderRadius: 12,
        paddingHorizontal: 10,
        marginVertical: 5,
        backgroundColor: secondaryColor,
        flexDirection: 'row',
      }}
    >
      <Image source={{ uri: image }} style={{ height: 46, width: 46 }} />
      
      <View style={{flex:1}}>
      <View
        style={{ flex: 1, marginLeft: 15, 
          flexDirection:"row",
          justifyContent: 'flex-start', flex: 1 }}
      >
        <AtomindText style={{ fontWeight: '700',
          justifyContent:"center",
          alignContent:"center",
          alignItems:"center",
          alignSelf:"center",
        fontSize: 16, color: '#000' }}>
          {name}
        </AtomindText>

        <AtomindText
          style={{ fontWeight: '400',marginLeft:5,
          justifyContent:"center",
          alignContent:"center",
          alignItems:"center",
          alignSelf:"center",
          fontSize: 14, color: '#717171' }}
        >
          {price?formatMoney(price):"-"}
        </AtomindText>
      </View>

      <AtomindText
          style={{ fontWeight: '800',
          marginLeft:15,

          fontSize: 14, color: coin.primaryColor }}
        >
         {myBalance.toFixed(6)} {coin.symbol.toUpperCase()}
        </AtomindText>
      </View>
     
      <View
        style={{
          flexDirection:"row",
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
          backgroundColor: '#ffffff95',
          alignSelf:"center"
        }}
      >
        <AtomindText
          style={{
            paddingHorizontal: 5,
            fontSize: 13,
            fontWeight: '400',
            color:change24Hours>0?"green":"red",
            paddingVertical: 4,
            
          }}
        >
          {isNaN(change24Hours)?change24Hours:parseFloat(change24Hours)
          .toFixed(2)}% 
        </AtomindText>
      </View>
    </TouchableOpacity>
  )
}

export default OneTokenSearchRow
