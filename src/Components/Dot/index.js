import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'

import { TouchableOpacity } from 'react-native'
import { useTheme, Text } from '@ui-kitten/components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-eva-icons'

const Dot = props => {
  const theme = useTheme()

 
  return (
    <View
    style={{
      marginHorizontal:10,
      borderWidth:1,
      borderColor: theme['color-primary-500'] ,
      height: 8,
      width: 8,
      backgroundColor:props.filled? theme['color-primary-500']:"null" ,
      borderRadius: 100,
    }}
  />
  )
}

export default Dot
