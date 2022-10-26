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
        Real-Time Graph
      </AtomindText>

      <AtomindText
        style={{
          fontSize: 14,
          color: '#5D6677',
          alignContent: 'center',
          textAlign: 'center',
        }}
      >
Get the real-time graphs with market history and info      </AtomindText>
    </View>
  )
}

export default OnBoard1
