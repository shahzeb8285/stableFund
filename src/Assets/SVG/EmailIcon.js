import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const EmailIcon = (props) => (
  <Svg
  width={20}
  height={16}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <Path
      d="M17 0H3a3.003 3.003 0 0 0-3 3v10a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V3a3.003 3.003 0 0 0-3-3ZM3 1h14c.37 0 .712.108 1.01.284l-6.95 6.948a1.503 1.503 0 0 1-2.12 0L1.99 1.284C2.289 1.108 2.63 1 3 1Zm16 12a2.003 2.003 0 0 1-2 2H3a2.003 2.003 0 0 1-2-2V3c0-.37.108-.712.284-1.01l6.948 6.95c.469.469 1.105.732 1.768.73.663.002 1.3-.261 1.768-.73l6.948-6.95c.176.298.284.64.284 1.01v10Z"
      fill={props.color ? props.color : "#474ca8"}
  />
</Svg>
)

export default EmailIcon
