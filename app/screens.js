import { Navigation } from 'react-native-navigation'

import PageOne from './pageOne'

import registerContainerWithRedux from './redux/RNNReduxProvider'

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  registerContainerWithRedux('example.pageOne', PageOne, store, Provider)
}
