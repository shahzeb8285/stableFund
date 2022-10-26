import React, { useEffect, useState } from 'react'

import { TouchableOpacity, Image } from 'react-native'
import { useTheme, Text } from '@ui-kitten/components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-eva-icons'

const BackButton = props => {
  const theme = useTheme()
  const [styles, setStyles] = useState({})
  const BackIcon = props => <Icon {...props} name="arrow-back-outline" />

  useEffect(() => {
    if (props.style) {
      setStyles(props.style)
    }
  }, [props.style])
  return (
    <TouchableOpacity
      onPress={() => {
        if (props.onPress) {
          props.onPress()
        }
      }}
      style={[
        {
          alignSelf: 'baseline',
          margin: 15 ,
          padding: 15,
          borderRadius: 18,
          borderWidth: 1,
          borderColor: theme['color-primary-700'],
        },
        styles,
      ]}
    >
      <Image
        source={require('../../Assets/Icons/back.png')}
        style={{ height: 20, width: 20 }}
      />
      {/* <BackIcon fill={"#000"} height={30} width={30} /> */}
    </TouchableOpacity>
  )
}

export default BackButton
