import React, { useEffect } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { AtomindText, Brand } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'

const StartupContainer = () => {

  const { t } = useTranslation()


  return (
    <AtomindText>Hii</AtomindText>
  )
}

export default StartupContainer
