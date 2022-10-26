import React, { useEffect, useState } from 'react'

import { TouchableOpacity } from 'react-native'
import { useTheme, Text } from '@ui-kitten/components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-eva-icons'

const BackButton = props => {
  const theme = useTheme()
  const [styles, setStyles] = useState({})

  const primaryButtonStyle = {
    color: '#fff',
    backgroundColor: theme['color-primary-default'],
  }

  const secondaryButtonStyle = {
    color: theme['color-primary-500'],
    backgroundColor: '#E8EEF2',
  }
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
          marginVertical: 16,
          borderRadius: 10,
          // borderWidth: 1,
          borderRadius: 15,
          padding: 10,
          paddingVertical: 14,
          width: '100%',
        },
        props.secondary ? secondaryButtonStyle : primaryButtonStyle,
       

      ]}
    >
      <Text
        style={{
          fontWeight: '500',
          textAlign: 'center',
          fontSize: 16,
          color: props.secondary ? theme['color-primary-500'] : '#fff',

          fontFamily: 'DMSans-Regular',
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  )
}

export default BackButton
