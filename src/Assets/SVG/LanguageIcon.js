import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={22}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11 5.5a5.625 5.625 0 1 0 0 11.25 5.631 5.631 0 0 0 5.625-5.625A5.625 5.625 0 0 0 11 5.5Zm0 10a4.375 4.375 0 1 1 0-8.75 4.375 4.375 0 0 1 0 8.75Zm7.513-11.888c-4.15-4.15-10.877-4.15-15.026 0-4.15 4.15-4.15 10.877 0 15.027l7.071 7.07a.622.622 0 0 0 .884 0l7.071-7.07c4.15-4.15 4.15-10.878 0-15.027Zm-.883 14.143L11 24.383l-6.63-6.628a9.376 9.376 0 1 1 13.26 0Z"
    />
  </Svg>
)

export default SvgComponent
