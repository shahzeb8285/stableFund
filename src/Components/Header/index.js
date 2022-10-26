import React, { useEffect, useState } from 'react'

import { TouchableOpacity, View } from 'react-native'
import { useTheme, Text } from '@ui-kitten/components'
import AtomindText from '../AtomindText'
import BackButton from '../BackButton'

const Header = (props) => {
 

  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
      }}
    >
      <BackButton
              onPress={() => {
                  if (props.onBack) {
                    props.onBack()
                  }
        
        }}
      />

      <AtomindText
        style={{
          textAlign: 'center',
          fontSize: 18,
          fontWeight: '500',
          alignSelf: 'center',
          padding: 15,
        }}
        category="h5"
      >
       {props.text}
      </AtomindText>
    </View>
  )
}

export default Header
