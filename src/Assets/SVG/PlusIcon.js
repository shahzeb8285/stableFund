import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const PlusIcon = (props) => (
  <Svg
    width={55}
    height={55}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect x={0.5} y={0.5} width={54} height={54} rx={14.5} stroke="#474ca8" />
    <Path d="M28 18v20M38 28H18" stroke="#474ca8" />
  </Svg>
)

export default PlusIcon
