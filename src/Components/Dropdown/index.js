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

import ModalDropdown from 'react-native-modal-dropdown'
import AtomindText from '../AtomindText'

const Dropdown = ({ label, data, onSelect }) => {
  const dropRef = useRef()
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
  const DEMO_OPTIONS_1 = [
    'option 1',
    'option 2',
    'option 3',
    'option 4',
    'option 5',
    'option 6',
    'option 7',
    'option 8',
    'option 9',
  ]

  const renderButtonText = rowData => {
    const { name, age } = rowData
    return `${name} - ${age}`
  }

  const _dropdown_2_renderRow = (rowData, rowID, highlighted) => {
    let icon = require('../../Assets/Icons/arrowDown.png')
    let evenRow = rowID % 2
    return (
      <TouchableOpacity>
        <View style={[styles.dropdown_2_row]}>
          <Image style={styles.dropdown_2_image} mode="stretch" source={icon} />

          <AtomindText>{`${rowData.name} (${rowData.age})`}</AtomindText>
        </View>
      </TouchableOpacity>
    )
  }

  function _dropdown_2_renderSeparator(rowID) {
    if (rowID == DEMO_OPTIONS_1.length - 1) return
    let key = `spr_${rowID}`
    return <View style={styles.dropdown_2_separator} key={key} />
  }
  return (
       <ModalDropdown

        ref={dropRef}
        defaultValue={''}
        textStyle={styles.dropdown_2_text}
        options={DEMO_OPTIONS_2}
        renderButtonText={rowData => renderButtonText(rowData)}
        renderRow={_dropdown_2_renderRow.bind(this)}
        renderSeparator={(sectionID, rowID, adjacentRowHighlighted) =>
          _dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted)
        }
      >
        <AtomindText>Click Here</AtomindText>

        </ModalDropdown>
     
     

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
    // borderRadius: 5,
    // backgroundColor: 'cornflowerblue',
  },
  dropdown_2_text: {
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
  dropdown_2_image: {
    marginLeft: 4,
    width: 30,
    height: 30,
  },
  dropdown_2_row_text: {
    marginHorizontal: 4,
    fontSize: 16,
    color: 'navy',
    textAlignVertical: 'center',
  },
  dropdown_2_separator: {
    height: 1,
    backgroundColor: 'cornflowerblue',
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
    backgroundColor: 'yellow',
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

export default Dropdown
