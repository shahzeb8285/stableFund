import { useSelector, useDispatch } from 'react-redux'

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { View } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import AtomindShimmer from '@/Components/AtomindShimmer'


const CarouselCards = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)
  const [data, setData] = useState([])
  const coins = useSelector(state => state.coins.data)
  const isLoadingCoinData = useSelector(state => state.coins.isLoading)

  useEffect(() => {
    if (coins) {
      setData(coins)
   }
  },[coins])
  

  
  useEffect(() => {
    if (isCarousel.current) {
      isCarousel.current.snapToNext()
    }
  }, [isCarousel])


  return (
    <AtomindShimmer
    style={{
      // flexDirection: 'row',
      //  justifyContent:"center",
      //  alignContent:"center",
      // alignSelf: 'center',
      flex: 1,
      width: '100%',
    }}
      visible={!isLoadingCoinData}
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
         return <CarouselCardItem {...props}/>
        }}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        autoplay
        ref={isCarousel}
      />
     
    </AtomindShimmer>
  )
}

export default CarouselCards
