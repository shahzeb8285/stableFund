import React from 'react'
import { StyleSheet, View, Image, ImageBackground } from 'react-native'
import {
  Button,
  Icon,
  IconRegistry,
  Layout,
  Input,
  useTheme,
} from '@ui-kitten/components'

import { Defs, LinearGradient, Stop } from 'react-native-svg'

import {
  AtomindButton,
  AtomindText,
  BackButton,
  Dot,
  HyperLink,
  IconInput,
} from '@/Components'
import { LineChart, Path, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import EmailIcon from '@/Assets/SVG/EmailIcon'
import PasswordIcon from '@/Assets/SVG/PasswordIcon'
import Header from '@/Components/Header'
import OnBoardBg from '@/Assets/Images/OnboardBG.png'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */

const MarketScreen = ({ navigation, route }) => {
  const theme = useTheme()
  const data = route.params
  const [myBalance,setBalance] = useState(0)
  const [ price,setPrice] = useState(0)

  const user = useSelector(state=>state.user.data)

  
  useEffect(()=>{
    if(user && user.portfolio){
      if(data.isCoin){
          const chain = user.portfolio[data.chainId ]
          setBalance(chain.nativeBalance.balance)
          setPrice(data.price)

      }else{

        setBalance(data.balance)
        setPrice(data.price)

      }
    

    }
  },[data,user])


  const Shadow = props => {
    return (
      <Path
        key={'shadow'}
        // fillRule="evenodd"
        // animated
        y={5}
        d={props.line}
        // fill={"red"}
        strokeWidth={10}
        stroke={data.primaryColor}
        strokeOpacity={0.3}
      />
    )
  }

  const renderChart = ()=>{
    if(data.priceHistory){
      return  <LineChart

      contentInset={{ top: 20, bottom: 20 }}
      style={{
        height: 180,
      }}
      showGrid
      curve={shape.curveLinear}
      data={data.priceHistory}
      svg={{
        stroke: data.primaryColor,
        
        strokeWidth: '2.5',
      }}
    >
      <Shadow />
    </LineChart>
    }

    return <AtomindText style={{fontSize:25,fontWeight:"700",textAlign:"center",marginTop:15}}>
      Chart Data not Available
    </AtomindText>
  }
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: data.secondaryColor,
        },
      ]}
    >
      <ScrollView style={[styles.container]}>
        <View style={[styles.container, { marginTop: 25 }]}>
          <SafeAreaView>
            <Header
              text="Market"
              onBack={() => {
                navigation.goBack()
              }}
            />
          </SafeAreaView>

          <View style={{ paddingHorizontal: 5 }}>
            <View>
              <Image
                source={{ uri: data.image }}
                style={{
                  height: 60,
                  width: 60,
                  // backgroundColor: "red",
                  alignSelf: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AtomindText
                  style={{
                    fontSize: 25,
                    fontWeight: '600',
                    textAlign: 'center',
                    marginTop: 10,
                  }}
                >
                  {data.name.toUpperCase()}
                </AtomindText>

                <View>
                  <AtomindText
                    style={{
                      fontSize: 20,
                      fontWeight: '900',
                      textAlign: 'center',
                      marginLeft: 10,
                      justifyContent: 'center',
                      color: data.primaryColor,
                      // color: data.change24Hours > 0 ? 'green' : 'red',

                      marginTop: 10,
                    }}
                  >
                    ${price}
                  </AtomindText>
                </View>
              </View>
            </View>
            <View
              style={{
                // flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
                marginTop: 10,
                paddingHorizontal: 12,

                backgroundColor: '#ffffff95',
                alignSelf: 'center',
              }}
            >
              <AtomindText
                style={{
                  paddingHorizontal: 5,
                  fontSize: 15,
                  fontWeight: '400',
                  // color: data.change24Hours > 0 ? 'green' : 'red',
                  paddingVertical: 2,
                }}
              >
                Last 24 Hours
              </AtomindText>
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AtomindText
                  style={{
                    paddingHorizontal: 5,
                    fontSize: 15,
                    fontWeight: '400',
                    color: data.change24Hours > 0 ? 'green' : 'red',
                    paddingVertical: 4,
                  }}
                >
                  {data && data.change24Hours?parseFloat( data.change24Hours).toFixed(2):null}%
                
                </AtomindText>
                {/* <AtomindText
                  style={{
                    paddingHorizontal: 5,
                    fontSize: 15,
                    fontWeight: '400',
                    // color: data.change24Hours > 0 ? 'green' : 'red',
                    paddingVertical: 4,
                  }}
                >
                  |
                </AtomindText> */}
                {/* <AtomindText
                  style={{
                    fontSize: 15,
                    fontWeight: '600',
                    // textAlign: 'center',
                    marginLeft: 5,
                    justifyContent: 'center',
                    color: data.change24Hours > 0 ? 'green' : 'red',

                    // marginTop: 10,
                  }}
                >
                  $
                  {((Number(data.price) * data.change24Hours) / 100).toFixed(2)}
                </AtomindText> */}
              </View>
            </View>

           {renderChart()}
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          backgroundColor: '#fff',
          // flex:1,
          paddingHorizontal: 30,
          paddingVertical: 15,
          marginTop: 10,
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
        }}
      >
        <AtomindText style={{ fontSize: 20, fontWeight: '600' }}>
          My Wallet
        </AtomindText>

        <AtomindText
          style={{ fontSize: 20, fontWeight: '800', color: data.primaryColor }}
        >
          {myBalance} {data.symbol.toUpperCase()}
        </AtomindText>

        <AtomindText style={{ fontSize: 15, fontWeight: '800' }}>
          ${(myBalance*price).toFixed(6)}
        </AtomindText>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flex: 1, marginLeft: 5 }}>
            {/* <AtomindButton text="Buy" onPress={() => {
              navigation.navigate("Buy",{data})
            }} /> */}
            <AtomindButton text="Send" onPress={() => {
              navigation.navigate('SendCrypto')
              }} />
          </View>

          <View style={{ flex: 1, marginLeft: 5 }}>
            {/* <AtomindButton text="Exchange" onPress={() => {
              navigation.navigate("Exchange",{data})
            }}  /> */}
            <AtomindButton text="Receive" onPress={() => {
              navigation.navigate('ReceiveCrypto')
            }}
            />
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginContainer: {
    // width: '100%',
    flex: 1,
    // backgroundColor: 'blue',

    padding: 20,
    // alignItems: 'center',
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

export default MarketScreen
