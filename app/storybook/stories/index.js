import React from 'react'
import { storiesOf } from '@storybook/react-native'
// import { action } from '@storybook/addon-actions'

import { View, Text } from 'react-native'

import { WelcomeBanner } from '../../pageOne'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView').add('default view', () => (
  <CenteredView>
    <Text>Hello Storybook</Text>
  </CenteredView>
))

storiesOf('WelcomeBanner').add('default view', () => <WelcomeBanner />)
