import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width={40}
    height={40}
    xmlSpace="preserve"
    {...props}
  >
    <Path
      fill="#DC9600"
      d="M32 59C19.318 59 9 48.683 9 36s10.318-23 23-23c12.683 0 23 10.317 23 23S44.683 59 32 59zm0-44c-11.58 0-21 9.421-21 21s9.42 21 21 21c11.579 0 21-9.421 21-21s-9.421-21-21-21z"
    />
    <Circle fill="#C80A50" cx={16} cy={48} r={12} />
    <Path
      fill="#FAB400"
      d="M24 55a3 3 0 0 0-3-3H11a3 3 0 0 0-3 3v1.943c2.123 1.9 4.926 3.057 8 3.057s5.877-1.156 8-3.057V55z"
    />
    <Path fill="#00A0C8" d="M12 52a4 4 0 0 0 8 0h-8z" />
    <Path fill="#D2AA82" d="M16 54a2 2 0 0 1-2-2v-3h4v3a2 2 0 0 1-2 2z" />
    <Path
      fill="#F0C8A0"
      d="M17 50h-2a3 3 0 0 1-3-3v-3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3a3 3 0 0 1-3 3z"
    />
    <Path
      fill="#0A5078"
      d="M18 42h-4a2 2 0 0 0-2 2v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 0-2-2z"
    />
    <Circle fill="#0A5078" cx={48} cy={48} r={12} />
    <Path
      fill="#00A0C8"
      d="M56 55a3 3 0 0 0-3-3H43a3 3 0 0 0-3 3v1.943c2.123 1.9 4.926 3.057 8 3.057s5.877-1.156 8-3.057V55z"
    />
    <Path fill="#0A5078" d="M44 52a4 4 0 0 0 8 0h-8z" />
    <Path fill="#D2AA82" d="M48 54a2 2 0 0 1-2-2v-3h4v3a2 2 0 0 1-2 2z" />
    <Path
      fill="#F0C8A0"
      d="M49 50h-2a3 3 0 0 1-3-3v-3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3a3 3 0 0 1-3 3z"
    />
    <Path
      fill="#DC9600"
      d="M50 42h-4a2 2 0 0 0-2 2v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 0-2-2z"
    />
    <Circle fill="#00A0C8" cx={32} cy={16} r={12} />
    <Path
      fill="#C80A50"
      d="M33 6h-2a5 5 0 0 0-5 5v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V11a5 5 0 0 0-5-5z"
    />
    <Path
      fill="#C80A50"
      d="M36 20h-8a4 4 0 0 0-4 4v.943c2.123 1.9 4.926 3.057 8 3.057s5.877-1.156 8-3.057V24a4 4 0 0 0-4-4z"
    />
    <Path fill="#00A0C8" d="M28 20a4 4 0 0 0 8 0h-8z" />
    <Path fill="#D2AA82" d="M32 22a2 2 0 0 1-2-2v-3h4v3a2 2 0 0 1-2 2z" />
    <Path
      fill="#F0C8A0"
      d="M33 18h-2a3 3 0 0 1-3-3v-3a2 2 0 0 1 2-2h1a2 2 0 0 0 2 2h3v3a3 3 0 0 1-3 3z"
    />
    <Path
      fill="#00325A"
      d="M36 48c0 .105.001.21.004.315C40.663 46.666 44 42.223 44 37c0-.105-.001-.21-.004-.315C39.337 38.334 36 42.777 36 48z"
    />
    <Path
      fill="#A00028"
      d="M20.004 36.685c-.003.105-.004.21-.004.315 0 5.223 3.337 9.666 7.996 11.315.003-.105.004-.21.004-.315 0-5.223-3.337-9.666-7.996-11.315z"
    />
    <Circle fill="#00A0C8" cx={32} cy={36} r={11} />
    <Path
      fill="#0A5078"
      d="M32 24c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm9.95 11h-3.971c-.136-3.308-.943-6.235-2.149-8.237 3.325 1.384 5.749 4.513 6.12 8.237zM32 46c-1.54 0-3.738-3.474-3.978-9h7.956c-.24 5.526-2.438 9-3.978 9zm-3.978-11c.24-5.526 2.438-9 3.978-9s3.738 3.474 3.978 9h-7.956zm.148-8.237c-1.205 2.002-2.012 4.929-2.149 8.237H22.05c.371-3.724 2.795-6.853 6.12-8.237zM22.05 37h3.971c.136 3.308.943 6.235 2.149 8.237-3.325-1.384-5.749-4.513-6.12-8.237zm13.78 8.237c1.205-2.002 2.012-4.929 2.149-8.237h3.971c-.371 3.724-2.795 6.853-6.12 8.237z"
    />
  </Svg>
)

export default SvgComponent
