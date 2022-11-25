import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const ScanIcon = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M22.631 13.014H1.5"
      stroke="url(#a)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.75 8.778V6.825A3.335 3.335 0 0 0 17.425 3.5h-1.644"
      stroke="url(#b)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.381 8.778V6.82a3.32 3.32 0 0 1 3.317-3.32l1.68-.001"
      stroke="url(#c)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.75 13.014v4.531a3.335 3.335 0 0 1-3.325 3.325h-1.644"
      stroke="url(#d)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.381 13.014v4.535a3.32 3.32 0 0 0 3.317 3.32l1.68.001"
      stroke="url(#e)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={18.174}
        y1={13.124}
        x2={18.134}
        y2={14.32}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6B56DF" />
        <Stop offset={0.854} stopColor="#BA4BFB" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={19.702}
        y1={4.077}
        x2={16.676}
        y2={8.153}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6B56DF" />
        <Stop offset={0.854} stopColor="#BA4BFB" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={7.324}
        y1={4.077}
        x2={4.303}
        y2={8.169}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6B56DF" />
        <Stop offset={0.854} stopColor="#BA4BFB" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={19.702}
        y1={13.874}
        x2={15.02}
        y2={18.11}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6B56DF" />
        <Stop offset={0.854} stopColor="#BA4BFB" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={7.324}
        y1={13.874}
        x2={2.64}
        y2={18.136}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6B56DF" />
        <Stop offset={0.854} stopColor="#BA4BFB" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default ScanIcon
