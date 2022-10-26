import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'

import { TouchableOpacity } from 'react-native'
import { useTheme, Text } from '@ui-kitten/components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-eva-icons'

const Button = props => {
  const theme = useTheme()
  const [styles, setStyles] = useState({})

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

          width: '100%',
        },
      ]}
    >
      <LinearGradient
        colors={['#6B56DF', '#BA4BFB']}
        style={{
          padding: 10,
          borderRadius: 44,
          paddingVertical: 14,
        }}
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
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default Button
