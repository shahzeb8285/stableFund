import React from 'react'
import PropTypes from 'prop-types'
import { View, Image,Text } from 'react-native'

const AtomindText = props => {
  return (
    <Text style={[{ fontFamily: 'DMSans-Regular',
    // backgroundColor:"red" 
    },{...props.style}]}>
      {props.children}
    </Text>
  )
}

export default AtomindText
