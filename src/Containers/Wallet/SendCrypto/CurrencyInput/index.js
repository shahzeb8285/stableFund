import { AtomindText } from '@/Components'
import React, { FC, ReactElement, useRef, useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
  Image,
  View,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'

import ModalDropdown from 'react-native-modal-dropdown'
import Web3Chains from '@/Chains/Web3'

const ExchangeInput = ({ label, data, onSelect }) => {
  const dropRef = useRef()
  const [selectedChain, setSelectedChain] = useState(Web3Chains[0])

  const DEMO_OPTIONS_2 = [
    { name: 'Rex', age: 30 },
    { name: 'Mary', age: 25 },
    { name: 'John', age: 41 },
    { name: 'Jim', age: 22 },
    { name: 'Susan', age: 52 },
    { name: 'Brent', age: 33 },
    { name: 'Alex', age: 16 },
    { name: 'Ian', age: 20 },
    { name: 'Phil', age: 24 },
  ]

  const renderButtonText = rowData => {
    const { name, age } = rowData
    return `${name} - ${age}`
  }

  const _dropdown_2_renderRow = rowData => {
    return (
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => {
          setSelectedChain(rowData)
          dropRef.current.hide()
        }}
      >
        <View style={[styles.dropdown_2_row]}>
          <Image
            style={styles.dropdown_logo}
            mode="stretch"
            source={rowData.logo}
          />

          <AtomindText
            style={{ fontWeight: '600', marginHorizontal: 5 }}
          >{`${rowData.name}`}</AtomindText>
        </View>
      </TouchableOpacity>
    )
  }

  function _dropdown_4_onSelect(idx, value) {
    // BUG: alert in a modal will auto dismiss and causes crash after reload and touch. @sohobloo 2016-12-1
    //alert(`idx=${idx}, value='${value}'`);
    console.debug(`idx=${idx}, value='${value}'`)
  }
  function _dropdown_2_renderSeparator(rowID) {
    if (rowID == Web3Chains.length) return null
    let key = `spr_${rowID}`
    return <View style={styles.dropdown_2_separator} key={key} />
  }
  return (
    <LinearGradient
      colors={['#6B56DF', '#BA4BFB']}
      style={{
        padding: 1,
        borderRadius: 5,
      }}
    >
      <View
        style={{
          // flex:1,
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          padding: 12,
        }}
      >
        <TextInput placeholder="Enter Amount" style={{ fontSize: 18 }} />

        <ModalDropdown
          ref={dropRef}
          defaultValue={''}
          textStyle={styles.dropdown_text}
          options={Web3Chains}
          onSelect={(idx, value) => _dropdown_4_onSelect(idx, value)}
          renderButtonText={rowData => renderButtonText(rowData)}
          renderRow={_dropdown_2_renderRow.bind(this)}
          renderSeparator={(sectionID, rowID, adjacentRowHighlighted) =>
            _dropdown_2_renderSeparator(
              sectionID,
              rowID,
              adjacentRowHighlighted,
            )
          }
        >
          <TouchableOpacity
            onPress={() => {
              dropRef.current.show()
            }}
          >
            <View style={[styles.dropdown_2_row]}>
              <Image
                style={styles.dropdown_logo}
                mode="stretch"
                source={selectedChain.logo}
              />

              <AtomindText
                style={{ fontWeight: '600', marginHorizontal: 5 }}
              >{`${selectedChain.name}`}</AtomindText>

              {/* <Image
                style={{ tintColor: '#000', height: 15, width: 15 }}
                resizeMode="contain"
                source={require('../../../../../Assets/Icons/arrowDown.png')}
              /> */}
            </View>
          </TouchableOpacity>
        </ModalDropdown>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  dropdown_2: {
    alignSelf: 'flex-end',
    // width: 150,
    // marginTop: 32,
    // right: 8,
    // borderWidth: 0,
    // backgroundColor:"red",
    borderRadius: 15,
    // backgroundColor: 'cornflowerblue',
  },
  dropdown_text: {
    marginVertical: 10,
    marginHorizontal: 6,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  dropdown_2_dropdown: {
    width: 150,
    height: 300,
    borderColor: 'cornflowerblue',
    borderWidth: 2,
    borderRadius: 3,
  },
  dropdown_2_row: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  dropdown_logo: {
    marginLeft: 5,
    //   marginRight:5,
    width: 30,
    borderRadius: 50,
    height: 30,
  },
  dropdown_2_row_text: {
    marginHorizontal: 4,
    fontSize: 16,
    color: 'navy',
    textAlignVertical: 'center',
  },
  dropdown_2_separator: {
    height: 0.2,
    backgroundColor: 'gray',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#efefef',
    height: 50,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    position: 'absolute',
    // backgroundColor: 'yellow',
    marginTop: 5,
    width: '100%',
    // shadowColor: '#000000',
    // shadowRadius: 4,
    // shadowOffset: { height: 4, width: 0 },
    // shadowOpacity: 0.5,
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
})

export default ExchangeInput
