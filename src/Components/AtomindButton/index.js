import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'

import { TouchableOpacity } from 'react-native'
import { useTheme, Text } from '@ui-kitten/components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-eva-icons'
import { Spinner } from '@ui-kitten/components';

const Button = props => {
  const theme = useTheme()
  const [styles, setStyles] = useState({})
  const primaryColor = ['#6B56DF', '#BA4BFB']
  const secondaryColor = ['#cb84f5', '#9f91eb']

  useEffect(() => {
    if (props.style) {
      setStyles(props.style)
    }
  }, [props.style])
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={() => {
        if (props.onPress) {
          props.onPress()
        }
      }}
      style={[
        {
          marginVertical: 2,

          width: '100%',
        },
      ]}
    >
      <LinearGradient
        colors={props.isSecondary ? secondaryColor : primaryColor}
        style={{
          padding: 10,
          opacity:props.disabled?0.5:1,
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
          {props.isLoading ? <Spinner /> : props.text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default Button
