import { AtomindText } from '@/Components'
import React from 'react'
import { View, Image } from 'react-native'
import BoardImg from './1.png'
const OnBoard1 = () => {
  return (
    <View style={{ alignContent: 'center', alignItems: 'center' }}>
      <Image
        source={BoardImg}
        resizeMode="cover"
        style={{
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          // backgroundColor:"red",
          height: 250,
          width: 250,
          alignContent: 'center',
        }}
      />

      <AtomindText style={{ fontWeight: '700', fontSize: 35, marginTop: 20 }}>
       Easy Exchange
      </AtomindText>

      <AtomindText
        style={{
          fontSize: 14,
          color: '#5D6677',
          alignContent: 'center',
          textAlign: 'center',
        }}
      >
Fast and secure way to exchange and purchase 150+ cryptocurrencies     </AtomindText>
    </View>
  )
}

export default OnBoard1
