import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Tab,
  Text,
  Button,
  useTheme,
} from '@ui-kitten/components'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AtomindText from '../AtomindText'

const SinglePhraseView = ({
  word1,
  word2,
  onWordClick = () => {},
  showIndex,
  word1Index,
  word2Index,
}) => {
  const theme = useTheme()

  return (
    <View style={{ flexDirection: 'row' }}>
      {word1 ? (
        <View
          key={word1}
          style={{
            // flex: 1,
            width:"50%",
            // margin: 5,
            marginRight:5,
            marginTop:5,
            borderRadius: 20,

            backgroundColor: 'transparent',
          }}
          level={word2?"1":"2"}
        >
          <TouchableOpacity
            onPress={() => {
              onWordClick(word1)
            }}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 20,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 0.8,
              // borderStyle: 'dashed',
              borderColor: theme['color-primary-500'],
            }}
          >
            <AtomindText style={{ fontWeight: '600',color:theme['color-primary-500'] }}>
              {showIndex ? word1Index + '. ' : ''}
              {word1}
            </AtomindText>
          </TouchableOpacity>
        </View>
      ) : null}

     

      {word2 ? (
        <View
          key={word2}
          style={{
            // flex: 1,
            width:"50%",
            marginRight:5,
            marginTop:5,
            // margin: 5,
            borderRadius: 20,
          }}
         
        >
          <TouchableOpacity
            onPress={() => {
              onWordClick(word2)
            }}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 20,
              backgroundColor: '#fff',

              // backgroundColor: theme['color-primary-100'],
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 0.8,
              // borderStyle: 'dashed',
              borderColor: theme['color-primary-500'],
            }}
          >
            <AtomindText style={{ fontWeight: '600',color:theme['color-primary-500'] }}>
              {showIndex ? word2Index + '. ' : ''}
              {word2}
            </AtomindText>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  )
}
const SeedPhraseViewer = ({
  words,
  navigation,
  onWordClick = () => {},
  showBorder = true,
  showIndex = true,
}) => {
  const theme = useTheme()

  const renderView = () => {
    let phrases = []

    let index = 0
    while (index < words.length) {
      if (index + 1 < words.length) {
        phrases.push(
          <SinglePhraseView
            onWordClick={onWordClick}
            key={index}
            word1Index={index + 1}
            word2Index={index + 2}
            showIndex={showIndex}
            word1={words[index]}
            word2={words[index + 1]}
          />,
        )
      } else {
        phrases.push(
          <SinglePhraseView
            onWordClick={onWordClick}
            key={index}
            word1Index={index}
            showIndex={showIndex}
            word1={words[index]}
          />,
        )
      }
      index = index + 2
    }

    return phrases
  }

  return (
    <View
      style={{
        borderWidth: showBorder ? 1 : 0,
        width: '100%',
        padding:  10,
        borderColor: theme['color-primary-500'],
        borderRadius: 10,
      }}
    >
      {renderView().map(i => {
        return i
      })}
    </View>
  )
}

export default SeedPhraseViewer
