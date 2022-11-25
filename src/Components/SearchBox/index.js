import React from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import SearchIcon from '@/Assets/SVG/SearchIcon'
import { TextInput } from 'react-native-gesture-handler'
import { useState } from 'react'

const SearchBox = ({ height, width, mode, onSearchQuery }) => {
  const [text, setText] = useState('')
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginVertical: 15,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
      }}
    >
      <SearchIcon fill="#00000099" />

      <TextInput
        placeholder="Search"
        onChangeText={t => {
          setText(t)
        }}
        value={text}
        onSubmitEditing={t => {
          onSearchQuery(text)
        }}
        style={{
          marginLeft: 10,
          fontWeight: '400',
          fontFamily: 'DMSans-Regular',
          flex:1,
          color: '#00000099',
          fontSize: 14,
        }}
      />
    </View>
  )
}

export default SearchBox
