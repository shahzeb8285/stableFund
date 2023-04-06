import React, { useEffect } from 'react'
import { StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native'
import {
  Button,
  Icon,
  IconRegistry,
  Layout,
  Input,
  useTheme,
} from '@ui-kitten/components'
import Toast from 'react-native-toast-message'
import moment from "moment"

import { AtomindButton, AtomindText, HyperLink, } from '@/Components'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import BackButton from '@/Components/BackButton'
import Header from '@/Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { IndexPath, Menu, MenuItem } from '@ui-kitten/components';
import auth from '@react-native-firebase/auth';
import { LoadingModal } from '@/Components/LoadingModal'
import { VasernDB } from '../../DB'
import { Linking } from "react-native";

import Web3Chains from "@/Chains/Web3";

const TransactionItem = ({ data, }) => {


  const getChain = () => {
    for (let _chain of Web3Chains) {
      if (_chain.chainId === parseInt(data.chainId)) {
        return _chain
      }
    }
    return null
  }

  return <TouchableOpacity
    onPress={() => {
      const url = `${getChain().explorer}/tx/${data.hash}`;
      Linking.openURL(url);

    }}
    style={{
      padding: 10,  borderWidth: 1,
      borderColor: "#d2e6fa",
      backgroundColor: "#d2e6fa",
      marginTop: 5,
      borderRadius: 12
    }}>
    <View style={{
      flexDirection: "row",
    }}>
      <View style={{ margin: 2 }}>
        <Image source={getChain().logo}
          resizeMode="contain"
          style={{ weight: 50, height: 50 }} />
      </View>
      <View>
        <View style={{ flexDirection: "row", flex: 1,}}>


          <View style={{ margin: 2 }}>
            <AtomindText style={{ fontSize: 15, fontWeight: "500" }}>
              Action
            </AtomindText>

            <AtomindText style={{ fontSize: 15, fontWeight: "800" }}>
              {data.actionName}
            </AtomindText>
          </View>

          <View style={{ margin: 2, marginLeft: 10 }}>
            <AtomindText style={{ fontSize: 15, fontWeight: "500" }}>
              Date
            </AtomindText>

            <AtomindText style={{ fontSize: 15, fontWeight: "800" }}>
              {moment(parseInt(data.timestamp / 1000) * 1000).format("DD MMM YYYY hh:mm a")}
            </AtomindText>
          </View>


        </View>

        <View style={{

          marginTop: 2,
        }}>




          <View style={{ margin: 2, }}>
            <AtomindText style={{ fontSize: 15, fontWeight: "500" }}>
              Transaction Hash
            </AtomindText>

            <AtomindText style={{ fontSize: 15, fontWeight: "800",paddingRight:5 }}>
              {data.hash}
            </AtomindText>
          </View>



        </View>
      </View>


    </View>
  </TouchableOpacity>
}


const WalletHistory = ({ navigation }) => {

  const [data, setData] = useState([])
  const { Transaction } = VasernDB

  const loadData = async () => {

    const txnData = await Transaction.data();
    setData(txnData)
  }




  useEffect(() => {
    setInterval(() => {
      loadData()
    }, 2000)
    loadData()
  }, [])
  

  return (
    <Layout style={[styles.container, { backgroundColor: '#fff' }]}>
      <SafeAreaView style={{ width: '100%', height: '100%' }}>
        <ScrollView style={styles.loginContainer}>
          <Header
            text={'Wallet History'}
            onBack={() => {
              navigation.goBack()
            }}
          />
          <View>

            <ScrollView>
              {data.reverse().map((_data, index) => {
                return <TransactionItem key={index} data={_data} />
              })}
            </ScrollView>


          </View>
        </ScrollView>
      </SafeAreaView>
    </Layout>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: '100%',
    flex: 1,
    // justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',

  },
  text: {
    // textAlign: 'center',
  },
  input: {
    // flex: 1,
    marginTop: 10,
    // margin: 5,
    // padding:18,
    borderRadius: 10,
  },
  loginButton: {
    marginVertical: 16,
    borderRadius: 10,
    // padding:50,
    width: '100%',
  },
})

export default WalletHistory
