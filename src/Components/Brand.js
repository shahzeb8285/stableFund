import React from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'

const Brand = ({ height, width, mode }) => {

  return (
   <View/>
  )
}

Brand.propTypes = {
  height: PropTypes.number,
  mode: PropTypes.oneOf(['contain', 'cover', 'stretch', 'repeat', 'center']),
  width: PropTypes.number,
}

Brand.defaultProps = {
  height: 200,
  mode: 'contain',
  width: 200,
}

export default Brand
