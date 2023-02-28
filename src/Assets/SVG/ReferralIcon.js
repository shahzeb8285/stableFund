import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 80 80"
  width={30} height={30} 
  {...props}>
    <Path
      d="M17 15.5A16.5 16.5 0 1 0 33.5 32 16.519 16.519 0 0 0 17 15.5ZM17 46A14.015 14.015 0 0 1 3 32a1.5 1.5 0 0 1 3 0 11.013 11.013 0 0 0 11 11 1.5 1.5 0 1 1 0 3Z"
      style={{
        fill: "#3e3ef4",
      }}
    />
    <Path 
     style={{
      fill: "#3e3ef4",
    }}
    d="M52 .5a11.488 11.488 0 0 0-10.638 15.852l-8.232 4.7a19.615 19.615 0 0 1 1.47 2.616l8.256-4.717A11.493 11.493 0 1 0 52 .5Zm0 20a8.5 8.5 0 1 1 8.5-8.5 8.51 8.51 0 0 1-8.5 8.5ZM63.5 52a11.486 11.486 0 0 0-20.64-6.951l-8.26-4.717a19.615 19.615 0 0 1-1.475 2.612l8.232 4.7A11.5 11.5 0 1 0 63.5 52Zm-3 0a8.5 8.5 0 1 1-8.5-8.5 8.51 8.51 0 0 1 8.5 8.5Z" />
  </Svg>
)

export default SvgComponent
