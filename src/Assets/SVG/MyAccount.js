import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13 8.469a.781.781 0 1 0 0 1.562.781.781 0 0 0 0-1.562Zm0 2.656a.625.625 0 0 0-.625.625v5a.625.625 0 1 0 1.25 0v-5a.625.625 0 0 0-.625-.625ZM13 .5C6.096.5.5 6.096.5 13S6.096 25.5 13 25.5c6.9-.008 12.492-5.6 12.5-12.5C25.5 6.096 19.904.5 13 .5Zm0 23.75C6.787 24.25 1.75 19.213 1.75 13S6.787 1.75 13 1.75c6.21.007 11.243 5.04 11.25 11.25 0 6.213-5.037 11.25-11.25 11.25Z"
    />
  </Svg>
)

export default SvgComponent
