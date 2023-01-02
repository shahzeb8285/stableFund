import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        viewBox="0 0 32 32" {...props}>
        <Path
            d="M5 26v-7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v7Z"
            style={{
                fill: "#009ae0",
            }}
        />
        <Path
            d="M13 26V16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10Z"
            style={{
                fill: "#00cf66",
            }}
        />
        <Path
            d="M21 26V13a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v13Z"
            style={{
                fill: "#fd3730",
            }}
        />
        <Rect
            x={2}
            y={25}
            width={28}
            height={2}
            rx={1}
            style={{
                fill: "#8fa5a5",
            }}
        />
        <Path
            d="M5 15a1 1 0 0 0 .346-.062l18.716-6.886-.241.513a1 1 0 1 0 1.811.849L26.905 6.7a1 1 0 0 0-.481-1.33l-2.717-1.276a1 1 0 0 0-.848 1.812l.547.256-18.752 6.9A1 1 0 0 0 5 15Z"
            style={{
                fill: "#2d4a60",
            }}
        />
    </Svg>
)

export default SvgComponent
