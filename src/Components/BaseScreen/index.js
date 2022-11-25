import React, { useEffect, useState } from 'react'

import { ImageBackground ,View} from 'react-native'
import { useTheme, Text } from '@ui-kitten/components'
import { SafeAreaView } from 'react-native-safe-area-context'

const BaseScreen = ({ children, isWhiteBg = false }) => {
  return isWhiteBg ? (
    <View
      style={{
        height: '100%',

        width: '100%',
        backgroundColor:"#fff",

        flex: 1,
      }}
    >
      <SafeAreaView style={{ height: '100%', width: '100%' }}>
        {children}
      </SafeAreaView>
    </View>
  ) : (
    <ImageBackground
      source={require('../../Assets/BG/shadowed_background.png')}
      style={{ height: '100%', width: '100%', flex: 1 }}
    >
      <SafeAreaView style={{ height: '100%', width: '100%' }}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  )
}

export default BaseScreen
