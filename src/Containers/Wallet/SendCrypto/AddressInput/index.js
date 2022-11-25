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
import ScanIcon from '@/Assets/SVG/ScanIcon'

const AddressInput = ({onQRClick,onChange }) => {
 


 
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
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          padding: 15,
        }}
      >
        <TextInput placeholder="Enter Address" style={{ fontSize: 22,flex:1 }} onChangeText={(t)=>{
          if(onChange){
            onChange(t)
          }
        }} />

        <TouchableOpacity 
        style={{alignSelf:"center"}}
        onPress={() => {
          onQRClick()
        }}>
          <ScanIcon/>
        </TouchableOpacity>
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

export default AddressInput
