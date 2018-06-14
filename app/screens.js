import { Navigation } from 'react-native-navigation'

import PageOne from './pageOne'

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.pageOne', () => PageOne)
}
