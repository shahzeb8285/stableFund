import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PasswordIcon = (props) => (
  <Svg
    width={16}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13 7V5A5 5 0 0 0 3 5v2a3.003 3.003 0 0 0-3 3v7a3.003 3.003 0 0 0 3 3h10a3.003 3.003 0 0 0 3-3v-7a3.003 3.003 0 0 0-3-3ZM4 5a4 4 0 1 1 8 0v2H4V5Zm11 12a2.003 2.003 0 0 1-2 2H3a2.003 2.003 0 0 1-2-2v-7a2.003 2.003 0 0 1 2-2h10a2.003 2.003 0 0 1 2 2v7Z"
      fill="#474ca8"
    />
  </Svg>
)

export default PasswordIcon
