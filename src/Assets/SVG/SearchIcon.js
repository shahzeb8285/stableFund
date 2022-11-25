import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SearchIcon = (props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m19.86 19.153-4.162-4.162A8.965 8.965 0 0 0 18 9a9 9 0 1 0-9 9 8.965 8.965 0 0 0 5.99-2.302l4.162 4.162a.5.5 0 0 0 .707-.707ZM9 17A8 8 0 1 1 9 1a8.01 8.01 0 0 1 8 8 8 8 0 0 1-8 8Z"
    //   fill="#000"
    />
  </Svg>
)

export default SearchIcon
