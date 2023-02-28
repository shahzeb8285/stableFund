import { AtomindText } from '@/Components'
import React, { useCallback } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel'
import { LineGraph, AxisLabel } from 'react-native-graph'
import gaussian from 'gaussian'
import { LineChart } from 'react-native-svg-charts'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6)

function weightedRandom(mean, variance) {
  var distribution = gaussian(mean, variance)
  // Take a random sample using inverse transform sampling method.
  return distribution.ppf(Math.random())
}

export function generateRandomGraphData(length) {
  return Array(length)
    .fill(0)
    .map((_, index) => ({
      date: new Date(index),
      value: weightedRandom(10, Math.pow(index + 1, 2)),
    }))
}

export function generateSinusGraphData(length) {
  return Array(length)
    .fill(0)
    .map((_, index) => ({
      date: new Date(index),
      value: Math.sin(index),
    }))
}

// [{"date": 1970-01-01T00:00:00.000Z, "value": 0}, {"date": 1970-01-01T00:00:00.001Z, "value": 0.8414709848078965}, {"date": 1970-01-01T00:00:00.002Z, "value": 0.9092974268256817}, {"date": 1970-01-01T00:00:00.003Z, "value": 0.1411200080598672}, {"date": 1970-01-01T00:00:00.004Z, "value": -0.7568024953079282}, {"date": 1970-01-01T00:00:00.005Z, "value": -0.9589242746631385}, {"date": 1970-01-01T00:00:00.006Z, "value": -0.27941549819892586}, {"date": 1970-01-01T00:00:00.007Z, "value": 0.6569865987187891}, {"date": 1970-01-01T00:00:00.008Z, "value": 0.9893582466233818}, {"date": 1970-01-01T00:00:00.009Z, "value": 0.4121184852417566}, {"date": 1970-01-01T00:00:00.010Z, "value": -0.5440211108893699}, {"date": 1970-01-01T00:00:00.011Z, "value": -0.9999902065507035}, {"date": 1970-01-01T00:00:00.012Z, "value": -0.5365729180004349}, {"date": 1970-01-01T00:00:00.013Z, "value": 0.4201670368266409}, {"date": 1970-01-01T00:00:00.014Z, "value": 0.9906073556948704}]

const SMALL_POINTS = generateSinusGraphData(100)
const CarouselCardItem = ({ item, index }) => {
  const navigation = useNavigation()
  const [myBalance,setBalance] = useState(0)
  const user = useSelector(state=>state.user.data)
  useEffect(()=>{
    if(user && user.portfolio){
      const chain = user.portfolio[item.chainId]
      if(chain){
        setBalance( chain.nativeBalance.balance)
      }

    }
  },[item,user])
  return (
    <TouchableOpacity

      onPress={() => {
        navigation.navigate("Market", item)
      }}
      style={[
        styles.container,
        {
          backgroundColor: item.secondaryColor,
        },
      ]}
      key={index}
    >
      <View
        style={{
          backgroundColor: '#fff',
          flexDirection: 'row',
          borderTopEndRadius: 25,
          borderTopStartRadius: 25,
        }}
      >
        <View style={{ flex: 1 }}>

          <View style={{
            flexDirection: "row",
            marginTop: 10,
            textAlign:"center",
            marginHorizontal:20,
            
            justifyContent: "flex-start"
          }}>
            <AtomindText
              style={{
                fontSize: 20,
                fontWeight: '800',
              }}
            >
              {item.symbol.toUpperCase()}

            </AtomindText>



            <AtomindText style={{
              fontSize: 12,
              marginLeft:5,
              textAlign:"center",
              justifyContent:"center",
              alignContent:"center",
              alignItems:"center",
              alignSelf:"center",
              fontWeight: '800',
              color: item.primaryColor,

            }}>
              ($ {item.price})
            </AtomindText>

          </View>


          {item.price ? (
            <AtomindText
              style={{
                color: item.primaryColor,
                marginHorizontal:20,
                marginVertical: 2,
                fontSize: 18,
                fontWeight: '800',
              }}
            >
             {myBalance.toFixed(6)} {item.symbol.toUpperCase()}
            </AtomindText>
          ) : null}
        </View>

        <View
          style={{
            // justifyContent: "center",
            // alignSelf: "baseline",
            // flex:1,
            marginHorizontal: 20,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AtomindText
            style={{
              // marginTop: 10,
              textAlign: 'center',
              fontSize: 12,
              padding: 5,

              color: item.change24Hours > 0 ? 'green' : 'red',
              fontWeight: '600',
              borderColor: item.change24Hours > 0 ? 'green' : 'red',
              borderRadius: 12,
              borderWidth: 1,
            }}
          >
            {item.change24Hours}%
          </AtomindText>
        </View>
      </View>

      {item && item.priceHistory && item.priceHistory.length > 0 ? (
        <LineChart
          contentInset={{ top: 20, bottom: 20 }}
          style={{
            height: 180,
          }}
          showGrid
          data={item.priceHistory}
          svg={{
            stroke: item.primaryColor,
            strokeWidth: '2.5',
          }}
        />
      ) : // <LineGraph
        //   points={SMALL_POINTS}
        //   animated={true}
        //   // enableFadeInMask
        //   // SelectionDot={SelectionDot}
        //   style={{
        //     // width: 500,
        //     height: 250,
        //     width: '100%',
        //     marginLeft: 5,
        //   }}
        //   // indicatorPulsating
        //   gradientFillColors={['#7476df5D', '#7476df4D', '#7476df00']}
        //   color="#4484B2"
        //   enablePanGesture={true}
        // />

        null}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 25,
    height: 250,
    width: ITEM_WIDTH,
    paddingBottom: 40,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
})

export default CarouselCardItem
