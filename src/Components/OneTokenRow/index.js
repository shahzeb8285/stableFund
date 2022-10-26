import React from 'react'
import { useEffect } from 'react'

import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AtomindShimmer from '../AtomindShimmer'
import AtomindText from '../AtomindText'

const OneTokenRow = ({ coin, isCoinLoading }) => {
  const { name, image, price, changeIn24Hours, symbol } = coin
  const userInfo = coin.userInfo



  return (
    <TouchableOpacity
      style={{
        paddingVertical: 20,
        flexDirection: 'row',
        borderTopWidth: 0.2,
        borderTopColor: '#EDEDED',
        borderBottomWidth: 0.2,
        borderBottomColor: '#EDEDED',
      }}
    >
      <Image source={{ uri: image }} style={{ height: 46, width: 46 }} />
      <View
        style={{ flex: 1, marginLeft: 15, justifyContent: 'center', flex: 1 }}
      >
        <AtomindText style={{ fontWeight: '500', fontSize: 16, color: '#000' }}>
          {name}
        </AtomindText>
        <AtomindShimmer
          visible={!isCoinLoading}
          style={{
            flexDirection: 'row',
            //  justifyContent:"center",
            //  alignContent:"center",
            alignSelf: 'center',
            flex: 1,
            width: '100%',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            {price ? (
              <AtomindText
                style={{
                  fontWeight: '400',

                  alignSelf: 'center',
                  fontSize: 14,
                  color: '#828282',
                }}
              >
                ${price}
              </AtomindText>
            ) : null}
            {price && changeIn24Hours ? (
              <View
                style={{
                  width: '100%',
                  height: 2,
                  alignContent: 'center',
                  alignSelf: 'center',
                  width: 2,
                  marginHorizontal: 8,
                  backgroundColor: '#000',
                  borderRadius: 10,
                }}
              />
            ) : null}
            {changeIn24Hours ? (
              <AtomindText
                style={{
                  fontWeight: '400',
                  alignSelf: 'center',
                  fontSize: 14,
                  color: changeIn24Hours > 0 ? '#5EA725' : '#C31004',
                }}
              >
                {changeIn24Hours}%
              </AtomindText>
            ) : null}
          </View>
        </AtomindShimmer>
      </View>

      <View>
        {userInfo && userInfo.myBalance ? (
          <>
            <AtomindText
              style={{ fontWeight: '300', fontSize: 16, color: '#000' }}
            >
              {userInfo.myBalance} {symbol}
            </AtomindText>

            <AtomindText
              style={{
                fontWeight: '300',
                marginTop: 5,
                textAlign: 'right',
                fontSize: 14,
                color: '#828282',
              }}
            >
              ${userInfo.myBalance * price}
            </AtomindText>
          </>
        ) : null}
      </View>
    </TouchableOpacity>
  )
}

export default OneTokenRow
