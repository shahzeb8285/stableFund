import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 32 32"
   width={30}
    height={30}
    {...props}>
    <G data-name="12.HISTORY">
      <Path d="M29 8.51C24-2 7.53-1.18 3.73 10c-3.62 9.56 5.74 19.48 15.4 17.32l-1.57 2.06a1 1 0 0 0 .8 1.61c.73.32 3.81-4.61 4.27-5a1 1 0 0 0-.35-1.49L17.34 22a1 1 0 0 0-.9 1.79l2.84 1.44c-8.42 2.12-16.81-6.18-13.66-14.55C8.86 1.14 23 .42 27.22 9.39A1 1 0 0 0 29 8.51Z" />
      <Path d="M15 6.59v8.68l-5.76 1.86A1 1 0 0 0 9.86 19l6.44-2.09a1 1 0 0 0 .7-1V6.59a1 1 0 0 0-2 0Z" />
    </G>
  </Svg>
)

export default SvgComponent
