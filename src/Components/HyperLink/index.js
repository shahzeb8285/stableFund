import React, { useEffect, useState } from 'react'

import { TouchableOpacity } from 'react-native'
import { useTheme, Text } from '@ui-kitten/components'
import AtomindText from '../AtomindText'

const HyperLink = props => {
  const theme = useTheme()
  const { style, text, onPress, point } = props
  const [styles, setStyles] = useState({})
  useEffect(() => {
    if (style) {
      setStyles(style)
    }
  }, [style])

  const onClick = () => {
  }
  return (
    <TouchableOpacity
      onPress={() => {
        if (onPress) {
          onPress()
       }
      }}
      style={[
        {
          alignSelf: 'flex-end',
          color: 'color-primary-500',
        },
        styles,
      ]}
    >
      <AtomindText
        style={{ color: theme['color-primary-500'], fontWeight: '500' }}
      >
        {text}
      </AtomindText>
    </TouchableOpacity>
  )
}

export default HyperLink
