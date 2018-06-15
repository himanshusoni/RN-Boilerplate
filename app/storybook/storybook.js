import React, { Component } from 'react'
import { Navigation } from 'react-native-navigation'
import { getStorybookUI, configure } from '@storybook/react-native'
import './addons'

// import your stories
configure(() => {
  require('./stories')
}, module)

const StorybookUI = getStorybookUI({ port: 7007, host: 'localhost' })

// since RN-Navigation expects a stateful component as a screen, we send one.
/* eslint-disable react/prefer-stateless-function */
class StoryBookUIContainer extends Component {
  render() {
    return <StorybookUI />
  }
}
/* eslint-enable react/prefer-stateless-function */

Navigation.registerComponent('storybook.UI', () => StoryBookUIContainer)
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'storybook.UI',
            },
          },
        ],
      },
    },
  })
})

export default StorybookUI
