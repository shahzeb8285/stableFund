import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={20}
    height={26}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.25 9.25v-2.5a6.25 6.25 0 1 0-12.5 0v2.5A3.754 3.754 0 0 0 0 13v8.75a3.754 3.754 0 0 0 3.75 3.75h12.5A3.754 3.754 0 0 0 20 21.75V13a3.754 3.754 0 0 0-3.75-3.75ZM5 6.75a5 5 0 1 1 10 0v2.5H5v-2.5Zm13.75 15a2.503 2.503 0 0 1-2.5 2.5H3.75a2.503 2.503 0 0 1-2.5-2.5V13a2.503 2.503 0 0 1 2.5-2.5h12.5a2.503 2.503 0 0 1 2.5 2.5v8.75Z"
    />
  </Svg>
)

export default SvgComponent
