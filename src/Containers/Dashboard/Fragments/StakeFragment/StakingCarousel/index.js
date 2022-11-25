import { useSelector, useDispatch } from 'react-redux'

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { View } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './StakingCarouselItem'
import AtomindShimmer from '@/Components/AtomindShimmer'
import DollarCoin from "@/Assets/SVG/DollarCoin"
import TotalInvestor from "@/Assets/SVG/TotalInvestor"

import RewardIcon from "@/Assets/SVG/RewardIcon"

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)
  // const [data, setData] = useState([])
  const stakingToken = "BNB"
  const data = [
    {
      name: "Total Invested",
      value: 1000,
      icon:<DollarCoin/>,
      bg:"#E8F0FF"
    },

    {
      name: "total Users",
      value: 21,
      icon:<TotalInvestor/>,
      bg:"#EEE8FF"
    },
    {
      name: "total Rewards",
      value: 1000,
      icon:<RewardIcon />,
      bg:"#E8F0FF"
    },

  ]
 



  useEffect(() => {
    if (isCarousel.current) {
      isCarousel.current.snapToNext()
    }
  }, [isCarousel])


  return (
    <View
      style={{
      
        flex: 1,
        width: '100%',
      }}
    >
      <Carousel

        data={data}
        autoplayDelay={3000}
        autoplayInterval={3000}
        enableSnap
        loop
        enableMomentum
        scrollEnabled
        renderItem={(props) => {
          return <CarouselCardItem {...props} />
        }}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        autoplay
        ref={isCarousel}
      />

    </View>
  )
}

export default CarouselCards
