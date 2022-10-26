import React from 'react'
import { useEffect } from 'react'

import { View, Text, Image ,TouchableOpacity} from 'react-native'
import AtomindShimmer from '../AtomindShimmer'
import AtomindText from '../AtomindText'
import { Toggle } from '@ui-kitten/components'



function formatMoney(number) {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}


const OneTokenSearchRow = ({ coin, onClick }) => {
  const { name, image, price, change24Hours, symbol, secondaryColor } = coin

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
      <View
        style={{ flex: 1, marginLeft: 15, justifyContent: 'center', flex: 1 }}
      >
        <AtomindText style={{ fontWeight: '700', fontSize: 16, color: '#000' }}>
          {name}
        </AtomindText>

        <AtomindText
          style={{ fontWeight: '400', fontSize: 14, color: '#717171' }}
        >
          ${price?formatMoney(price):"-"}
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
          {change24Hours}% 
        </AtomindText>
      </View>
    </TouchableOpacity>
  )
}

export default OneTokenSearchRow
