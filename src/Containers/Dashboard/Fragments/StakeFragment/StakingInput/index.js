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
  TextInput,
  View,
} from 'react-native'
// import { TextInput } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'

import ModalDropdown from 'react-native-modal-dropdown'
import Web3Chains from '@/Chains/Web3'
import { useEffect } from 'react'

const StakingInput = ({ label, data, onSelect ,setInputAmount,value}) => {



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
        <TextInput value={value.toString()} 
        placeholder="Enter Amount" 
        style={{ fontSize: 18,          color:"#000",
      }} 
        onChangeText={(text)=>{
          setInputAmount(text)
        }} />

      </View>
    </LinearGradient>
  )
}



export default StakingInput
