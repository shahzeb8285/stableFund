import { PhoneLogin } from "@/Containers"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PhoneIcon = (props) => (
  <Svg
    width={18}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14 .5H4A3.754 3.754 0 0 0 .25 4.25v17.5A3.754 3.754 0 0 0 4 25.5h10a3.754 3.754 0 0 0 3.75-3.75V4.25A3.754 3.754 0 0 0 14 .5Zm2.5 21.25a2.503 2.503 0 0 1-2.5 2.5H4a2.503 2.503 0 0 1-2.5-2.5V4.25A2.503 2.503 0 0 1 4 1.75h10a2.503 2.503 0 0 1 2.5 2.5v17.5ZM9 17.375a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75Zm0 2.5a.625.625 0 1 1 0-1.25.625.625 0 0 1 0 1.25Z"
      fill="#474ca8"
    />
  </Svg>
)

export default PhoneIcon
