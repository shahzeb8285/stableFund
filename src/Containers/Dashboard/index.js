import React from 'react'
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
  useTheme,
  ViewPager,
} from '@ui-kitten/components'
import { Icon } from 'react-native-eva-icons'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Svg, { Path } from 'react-native-svg'
import LinearGradient from 'react-native-linear-gradient'

import WalletFragment from './Fragments/WalletFragment'

import HomeFragment from './Fragments/Home'
import StakeFragment from './Fragments/StakeFragment'
import ExchangeFragment from "./Fragments/ExchangeFragment"
import BuyFragment from "./Fragments/BuyFragment";
import { useEffect } from 'react'
import { fetchCoinDataAsync } from '@/Store/Slices/coins/coins'
import { useDispatch, useSelector } from 'react-redux'
import { AtomindText } from '@/Components'
import { setGlobalUser } from '@/Store/Slices/User/user'
import loadStakingData from '@/Config/Staking'
import { setGlobalStaking, setStakingData } from '@/Store/Slices/Staking/staking'

// const HomeIcon = props => {
//   return <Icon {...props} fill={props.style.tintColor} name="home-outline" />
// }

const HomeIcon = props => {
  return (
    <Svg
      width={22}
      height={24}
      fill="#384FE2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="m20.31 7.278-7-6.145a3.51 3.51 0 0 0-4.62 0l-7 6.145A3.5 3.5 0 0 0 .5 9.908v10.259a3.504 3.504 0 0 0 3.5 3.5h14a3.504 3.504 0 0 0 3.5-3.5V9.908a3.5 3.5 0 0 0-1.19-2.63ZM14.5 22.5h-7v-7a2.336 2.336 0 0 1 2.333-2.333h2.334A2.336 2.336 0 0 1 14.5 15.5v7Zm5.833-2.333A2.336 2.336 0 0 1 18 22.5h-2.333v-7a3.504 3.504 0 0 0-3.5-3.5H9.833a3.504 3.504 0 0 0-3.5 3.5v7H4a2.336 2.336 0 0 1-2.333-2.333V9.908c0-.671.289-1.31.794-1.753l7-6.145A2.328 2.328 0 0 1 11 1.433a2.328 2.328 0 0 1 1.54.577l7 6.145a2.33 2.33 0 0 1 .793 1.753v10.259Z"
        // fill="#384FE2"
      />
    </Svg>
  )
}

const StarIcon = props => {
  return (
    <Svg
      width={22}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23.6605 9.58834C23.7074 9.2694 23.4867 8.97289 23.1678 8.92611L15.8123 7.85401L12.5231 1.1696C12.4708 1.08073 12.3967 1.00661 12.3078 0.954339C12.019 0.784438 11.6471 0.880782 11.4772 1.1696L8.18793 7.85401L0.832464 8.92611C0.706142 8.94462 0.589361 9.00408 0.500067 9.0953C0.274552 9.32566 0.27854 9.69523 0.508897 9.92074L5.83181 15.1252L4.57514 22.4749C4.55378 22.6012 4.5745 22.7309 4.63417 22.8442C4.78428 23.1296 5.1374 23.2392 5.4228 23.089L12.0001 19.6209L18.5774 23.089C18.6614 23.133 18.7549 23.156 18.8497 23.1563C18.8822 23.1563 18.9145 23.1535 18.9466 23.1481C19.2646 23.0944 19.4788 22.793 19.4251 22.4749L18.1684 15.1252L23.4913 9.92074C23.5825 9.83145 23.642 9.71467 23.6605 9.58834ZM17.1339 14.5053C16.9972 14.6392 16.9346 14.8316 16.9664 15.0203L18.075 21.5053L12.2724 18.4452C12.1884 18.4012 12.095 18.3781 12.0001 18.3779C11.9053 18.3781 11.8119 18.4012 11.7278 18.4452L5.92531 21.5054L7.0338 15.0203C7.06563 14.8316 7.00304 14.6393 6.86632 14.5054L2.16775 9.91049L8.65961 8.96485C8.84952 8.93665 9.01352 8.81695 9.09825 8.6447L12.0001 2.7487L14.902 8.6447C14.9867 8.81702 15.1507 8.93672 15.3406 8.96485L21.8325 9.91049L17.1339 14.5053Z"
        fill-opacity="0.6"
      />
    </Svg>
  )
}

const WalletIcon = props => {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19.083 7.373H4.917A2.92 2.92 0 0 0 2 10.289v8.333a2.92 2.92 0 0 0 2.917 2.917h14.166A2.92 2.92 0 0 0 22 18.622V10.29a2.92 2.92 0 0 0-2.917-2.916Zm2.084 11.25a2.086 2.086 0 0 1-2.084 2.083H4.917a2.086 2.086 0 0 1-2.084-2.084V10.29c0-1.148.935-2.083 2.084-2.083h14.166c1.15 0 2.084.935 2.084 2.083v8.333Z"
        // fill="#717171"
      />
      <Path
        d="M18.25 13.206c-.69 0-1.25.56-1.25 1.25 0 .689.56 1.25 1.25 1.25s1.25-.561 1.25-1.25c0-.69-.56-1.25-1.25-1.25Zm0 1.667a.417.417 0 1 1 .001-.835.417.417 0 0 1-.001.835Z"
        // fill="#717171"
      />
      <Path
        d="M21.584 11.54H18.25a2.92 2.92 0 0 0-2.916 2.916 2.92 2.92 0 0 0 2.916 2.916h3.334c.23 0 .416-.186.416-.416v-5a.417.417 0 0 0-.416-.417Zm-.417 5H18.25a2.086 2.086 0 0 1-2.083-2.084c0-1.149.934-2.083 2.083-2.083h2.917v4.166ZM19.039 7.602l-1.764-3.528a2.893 2.893 0 0 0-1.728-1.476 2.901 2.901 0 0 0-2.264.213L4.72 7.422a.416.416 0 1 0 .395.734l8.566-4.61c.5-.27 1.076-.324 1.616-.153.541.171.98.546 1.234 1.054l1.764 3.529a.417.417 0 0 0 .745-.374Z"
        // fill="#717171"
      />
      <Path
        d="M17.367 4.26a.418.418 0 0 0-.565-.17l-6.19 3.333a.417.417 0 1 0 .396.734l6.19-3.334a.416.416 0 0 0 .17-.564ZM9.5 4.873H6.583A4.589 4.589 0 0 0 2 9.456v.833a.417.417 0 0 0 .833 0v-.833a3.755 3.755 0 0 1 3.75-3.75H9.5a.417.417 0 0 0 0-.833ZM17.417 4.873a.417.417 0 0 0 0 .833 3.755 3.755 0 0 1 3.75 3.75v.833a.417.417 0 0 0 .833 0v-.833a4.589 4.589 0 0 0-4.583-4.583Z"
        // fill="#717171"
      />
    </Svg>
  )
}

const BoxIcon = props => {
  return (
    <Svg
      width={22}
      height={24}
      fill="#384FE2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19.9046 6.50185C19.8989 6.42915 19.8801 6.36107 19.8483 6.29528C19.8387 6.27548 19.8339 6.25554 19.8221 6.23696C19.7764 6.1644 19.7186 6.09875 19.6409 6.05047L10.3075 0.264984C10.1189 0.148773 9.88093 0.148773 9.6923 0.264984L0.358968 6.05047C0.343089 6.06029 0.334686 6.07831 0.319875 6.08956C0.277578 6.12167 0.24176 6.15763 0.209646 6.19993C0.198324 6.21481 0.180308 6.22329 0.17041 6.23924C0.162293 6.25241 0.161936 6.26751 0.154958 6.28104C0.137156 6.31507 0.126048 6.35061 0.115224 6.38813C0.104187 6.42687 0.0946451 6.46411 0.0918681 6.50356C0.0907288 6.51837 0.083252 6.53098 0.083252 6.54607V17.454C0.0831808 17.6558 0.1875 17.8432 0.358968 17.9496L9.6923 23.735C9.6965 23.7377 9.70206 23.7365 9.70633 23.739C9.71046 23.7414 9.71203 23.7464 9.71623 23.7487C9.80274 23.7976 9.90051 23.823 9.99992 23.8228C10.0993 23.823 10.1971 23.7976 10.2836 23.7487C10.2878 23.7464 10.2894 23.7414 10.2935 23.739C10.2978 23.7365 10.3033 23.7377 10.3075 23.735L19.6409 17.9496C19.8122 17.843 19.9164 17.6557 19.9166 17.454V6.54607C19.9166 6.53026 19.9058 6.51745 19.9046 6.50185ZM9.41658 22.1913L1.24992 17.1292V7.59425L9.41658 12.6551V22.1913ZM9.99992 11.6445L9.52681 11.3513L1.77401 6.54607L9.99992 1.44646L18.2258 6.54607L12.1801 10.2932L9.99992 11.6445ZM18.7499 17.1292L10.5833 22.1913V12.6551L18.7499 7.59425V17.1292Z"
        fill-opacity="0.6"
      />
    </Svg>
  )
}

const SettingIcon = props => {
  return (
    <Svg
      width={22}
      height={24}
      fill="#384FE2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.4168 7.21668C8.73344 7.21668 6.7501 9.43334 6.7501 12.1167C6.7501 14.8 8.96677 16.7833 11.6501 16.7833C14.2168 16.7833 16.3168 14.5667 16.3168 12V11.8833C16.2001 9.31668 13.9834 7.21668 11.4168 7.21668ZM15.0334 12.1167C15.0334 14.1 13.2834 15.6167 11.3001 15.6167C9.31677 15.6167 7.8001 13.8667 7.8001 11.8833C7.8001 9.90001 9.5501 8.38334 11.5334 8.38334C13.5168 8.38334 15.1501 10.0167 15.0334 12.1167C15.0334 12 15.0334 12.1167 15.0334 12.1167ZM21.3334 13.2833C20.7501 12.5833 20.7501 11.5333 21.3334 10.8333L22.9668 9.08334C23.0834 8.85001 23.2001 8.61668 23.0834 8.38334L20.6334 4.06668C20.5168 3.83334 20.2834 3.71668 20.0501 3.83334L17.7168 4.30001C16.7834 4.53334 15.8501 3.95001 15.5001 3.01668L14.8001 0.80001C14.5668 0.45001 14.3334 0.333344 14.1001 0.333344H9.08344C8.8501 0.333344 8.61677 0.45001 8.5001 0.683343L7.8001 3.01668C7.4501 3.83334 6.51677 4.41668 5.58344 4.18334L3.2501 3.71668C3.01677 3.71668 2.78344 3.83334 2.66677 4.06668L0.21677 8.26668C0.100103 8.50001 0.100103 8.73334 0.333436 8.96668L1.96677 10.7167C2.5501 11.4167 2.5501 12.4667 1.96677 13.1667L0.333436 15.0333C0.21677 15.2667 0.100103 15.5 0.21677 15.7333L2.66677 19.9333C2.78344 20.1667 3.01677 20.2833 3.2501 20.1667L5.58344 19.7C6.51677 19.4667 7.4501 20.05 7.8001 20.9833L8.5001 23.3167C8.61677 23.55 8.8501 23.6667 9.08344 23.6667H13.9834C14.2168 23.6667 14.4501 23.55 14.5668 23.3167L15.2668 21.1C15.6168 20.1667 16.5501 19.7 17.4834 19.8167L19.8168 20.2833C20.0501 20.2833 20.2834 20.1667 20.4001 20.05L22.8501 15.7333C22.9668 15.5 22.9668 15.2667 22.7334 15.0333L21.3334 13.2833ZM19.7001 19L17.8334 18.65C16.3168 18.3 14.8001 19.2333 14.3334 20.6333L13.6334 22.5H9.5501L8.96677 20.6333C8.5001 19.1167 6.98344 18.3 5.46677 18.65L3.48344 19L1.38344 15.5L2.66677 13.9833C3.71677 12.8167 3.71677 11.0667 2.66677 9.90001L1.38344 8.50001L3.48344 5.00001L5.3501 5.35001C6.86677 5.70001 8.38344 4.76668 8.8501 3.36668L9.5501 1.50001H13.6334L14.2168 3.36668C14.6834 4.88334 16.2001 5.70001 17.7168 5.35001L19.7001 5.00001L21.8001 8.50001L20.5168 10.0167C19.4668 11.1833 19.4668 12.9333 20.5168 14.1L21.8001 15.6167L19.7001 19Z"
        fill-opacity="0.6"
      />
    </Svg>
  )
}
const StakeIcon = props => {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.004 10.9h2.398a.6.6 0 0 0 0-1.2H9.203v-.6a.6.6 0 1 0-1.199 0v.6a1.799 1.799 0 0 0 0 3.597h1.199a.6.6 0 0 1 0 1.199H6.805a.6.6 0 0 0 0 1.199h1.199v.6a.6.6 0 1 0 1.199 0v-.6a1.798 1.798 0 1 0 0-3.597H8.004a.6.6 0 1 1 0-1.199Z"
        // fill="#717171"
      />
      <Path
        d="M18.495 3.705h-6.594a1.499 1.499 0 0 0-1.5 1.499V6.36a6.594 6.594 0 1 0 .486 12.517c.6.558.444.414 7.608.414a1.499 1.499 0 0 0 1.499-1.499c0-2.032.066-2.206-.306-2.697.384-.51.306-.756.306-2.698a1.516 1.516 0 0 0-.306-.9c.196-.259.303-.574.306-.899 0-2.032.066-2.206-.306-2.697.384-.51.306-.756.306-2.698a1.505 1.505 0 0 0-1.499-1.499Zm-6.894 1.499a.306.306 0 0 1 .3-.3h6.594c.396 0 .3.318.3 2.098a.306.306 0 0 1-.3.3c-7.356 0-5.671.156-6.894-.473V5.204ZM18.795 8.8v1.798a.306.306 0 0 1-.3.3H14.94a6.594 6.594 0 0 0-1.253-2.398h4.796a.305.305 0 0 1 .312.3Zm0 3.597v1.798a.305.305 0 0 1-.3.3H14.94a6.29 6.29 0 0 0 .258-2.398h3.297a.305.305 0 0 1 .3.3Zm-15.587.3a5.395 5.395 0 1 1 10.79 0 5.395 5.395 0 0 1-10.79 0Zm15.587 5.095a.306.306 0 0 1-.3.3H12.38a6.667 6.667 0 0 0 2.092-2.398h4.023a.305.305 0 0 1 .3.3v1.798Z"
        // fill="#717171"
      />
    </Svg>
  )
}

const ExchangeIcon = props => {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.852 10.444a5.707 5.707 0 0 0-5.704 5.704 5.707 5.707 0 0 0 5.704 5.704 5.707 5.707 0 0 0 5.704-5.704 5.707 5.707 0 0 0-5.704-5.704Zm0 1.037a4.67 4.67 0 0 1 4.667 4.667 4.67 4.67 0 0 1-4.667 4.667 4.67 4.67 0 0 1-4.667-4.667 4.67 4.67 0 0 1 4.667-4.666Z"
        // fill="#717171"
      />
      <Path
        d="M16.148 2.148a5.707 5.707 0 0 0-5.704 5.704 5.707 5.707 0 0 0 5.704 5.704 5.707 5.707 0 0 0 5.704-5.704 5.707 5.707 0 0 0-5.704-5.704Zm0 1.037a4.67 4.67 0 0 1 4.667 4.667 4.67 4.67 0 0 1-4.667 4.667 4.67 4.67 0 0 1-4.667-4.667 4.67 4.67 0 0 1 4.667-4.667Z"
        // fill="#717171"
      />
      <Path
        d="M6.296 14.593v3.11h-.518a.519.519 0 0 0 0 1.038h1.555v.518a.519.519 0 0 0 1.037 0v-.518h.519a1.556 1.556 0 0 0 1.16-2.593 1.556 1.556 0 0 0-1.16-2.593h-.518v-.518a.519.519 0 0 0-1.038 0v.519H5.778a.519.519 0 0 0 0 1.037h.518Zm2.593 2.074H7.333v1.037H8.89a.519.519 0 0 0 0-1.037Zm0-2.074H7.333v1.037H8.89a.519.519 0 0 0 0-1.037Z"
        // stroke="#717171"
        strokeWidth={0.7}
      />
      <Path
        d="M5.26 7.637v-1.86a.519.519 0 0 0-1.038 0V8.89c0 .286.232.518.519.518h3.11a.519.519 0 0 0 0-1.037H5.993l5.338-5.337a6.815 6.815 0 0 1 9.637 9.638.519.519 0 0 0 .734.733A7.851 7.851 0 1 0 10.597 2.3L5.259 7.637ZM18.741 16.363v1.86a.519.519 0 0 0 1.037 0V15.11a.519.519 0 0 0-.518-.518h-3.112a.519.519 0 0 0 0 1.037h1.86l-5.337 5.337a6.815 6.815 0 0 1-9.638-9.637.519.519 0 0 0-.733-.734A7.851 7.851 0 1 0 13.404 21.7l5.337-5.337Z"
        // fill="#717171"
      />
      <Path
        d="M15.63 5.259h-.52a1.555 1.555 0 0 0-1.554 1.555v.002A1.555 1.555 0 0 0 15.11 8.37h2.076a.518.518 0 0 1 .518.518v.002a.518.518 0 0 1-.518.517H15.11a.517.517 0 0 1-.517-.517.519.519 0 0 0-1.037 0 1.555 1.555 0 0 0 1.554 1.554h.52v.519a.519.519 0 0 0 1.037 0v-.519h.52A1.555 1.555 0 0 0 18.74 8.89v-.002a1.555 1.555 0 0 0-1.555-1.555H15.11a.517.517 0 0 1-.517-.517v-.002a.518.518 0 0 1 .517-.518h2.076a.518.518 0 0 1 .518.518.519.519 0 0 0 1.037 0 1.555 1.555 0 0 0-1.555-1.555h-.52V4.74a.519.519 0 0 0-1.036 0v.519Z"
        // stroke="#717171"
        strokeWidth={0.7}
      />
    </Svg>
  )
}

const BuyIcon = props => {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22 12a10 10 0 1 0-10 10 10.011 10.011 0 0 0 10-10Zm-10 8.462A8.461 8.461 0 1 1 20.462 12 8.47 8.47 0 0 1 12 20.462Z"
        // fill="#717171"
      />
      <Path
        d="M13.649 9.582a.769.769 0 1 0 1.538 0 3.19 3.19 0 0 0-2.418-3.089v-.647a.77.77 0 0 0-1.538 0v.647a3.182 3.182 0 0 0 0 6.179v3.196a1.643 1.643 0 0 1-.88-1.45.77.77 0 1 0-1.538 0 3.19 3.19 0 0 0 2.418 3.089v.647a.77.77 0 0 0 1.538 0v-.647a3.182 3.182 0 0 0 0-6.179V8.132a1.643 1.643 0 0 1 .88 1.45Zm-2.418 1.45a1.633 1.633 0 0 1 0-2.897v2.898Zm2.418 3.386a1.644 1.644 0 0 1-.88 1.45v-2.901a1.643 1.643 0 0 1 .88 1.45Z"
        // fill="#717171"
      />
    </Svg>
  )
}
const Tab = ({ isActive, onClick, icon, title }) => {
  const theme = useTheme()

  return (
    <TouchableOpacity
      style={{
        // paddingTop:10,
        // alignContent: 'center',
        // justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => {
        onClick()
      }}
    >
      <LinearGradient
        colors={['#6B56DF', '#BA4BFB']}
        style={{
          backgroundColor: 'red',
          height: 4,
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          opacity: isActive ? 1 : 0,
          width: '40%',
          marginHorizontal: 5,
          marginBottom: 5,
        }}
      />
      {icon}

      <AtomindText
        style={{ color: isActive ? theme['color-primary-500'] : '#00000099' }}
      >
        {title}
      </AtomindText>
    </TouchableOpacity>
  )
}

const NavigationBar = ({ activeTab, onTabClick }) => {
  const theme = useTheme()

  return (
    <View
      style={{
        // flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 20,
        // paddingTop:15,
        flexDirection: 'row',
        // alignContent: 'center',
        // alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      <View style={{ flex: 1 }}>
        <Tab
          title="Home"
          icon={
            <HomeIcon
              fill={activeTab == 0 ? theme['color-primary-500'] : '#00000099'}
              preserveAspectRatio="xMidYMin"
              style={{
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          }
          isActive={activeTab == 0}
          onClick={() => {
            onTabClick(0)
          }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Tab
          title="Wallet"
          icon={
            <WalletIcon
              fill={activeTab == 1 ? theme['color-primary-500'] : '#00000099'}
              preserveAspectRatio="xMidYMin"
              style={{
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          }
          isActive={activeTab == 1}
          onClick={() => {
            onTabClick(1)
          }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Tab
          title="Stake"
          icon={
            <StakeIcon
              fill={activeTab == 2 ? theme['color-primary-500'] : '#00000099'}
              preserveAspectRatio="xMidYMin"
              style={{
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          }
          isActive={activeTab == 2}
          onClick={() => {
            onTabClick(2)
          }}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Tab
          title="Exchange"
          icon={
            <ExchangeIcon
              fill={activeTab == 3 ? theme['color-primary-500'] : '#00000099'}
              preserveAspectRatio="xMidYMin"
              style={{
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          }
          isActive={activeTab == 3}
          onClick={() => {
            onTabClick(3)
          }}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Tab
          title="Buy"
          icon={
            <BuyIcon
              fill={activeTab == 4 ? theme['color-primary-500'] : '#00000099'}
              preserveAspectRatio="xMidYMin"
              style={{
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          }
          isActive={activeTab == 4}
          onClick={() => {
            onTabClick(4)
          }}
        />
      </View>
    </View>
  )
}

const DashboardScreen = props => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.data)

  useEffect(() => {
    dispatch(fetchCoinDataAsync())
  }, [])


  const _loadStakingData = async()=>{
   const _stakingData = await loadStakingData( user.wallet.address)
   dispatch(setStakingData(_stakingData))
  }
  useEffect(()=>{
    if(user && user.wallet.address){
      _loadStakingData()
    }
  },[user])


  return (
    <View
      style={{
        backgroundColor: '#fff',

        flex: 1,
        height: '100%',
        width: '100%',
      }}
    >
      <View style={{ flex: 1, height: '100%', width: '100%' }}>

        <ViewPager
        style={{ flex: 1, height: '100%', width: '100%' }}
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}
        >
          <HomeFragment navigation={props.navigation} />
          <WalletFragment navigation={props.navigation}/>
          <StakeFragment />
          <ExchangeFragment />
          <BuyFragment />
        </ViewPager>
      </View>
      <NavigationBar
        activeTab={selectedIndex}
        onTabClick={i => {
          setSelectedIndex(i)
        }}
      />
    </View>
  )
}

export default DashboardScreen
