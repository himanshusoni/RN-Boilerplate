import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

export default class App {
  init() {
    registerScreens();

    Navigation.startSingleScreenApp({
      screen: {
        screen: 'example.pageOne',
      },
      appStyle: {
        orientation: 'portrait',
        navBarHidden: true,
      }
    });
  }
}
