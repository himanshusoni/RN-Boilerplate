import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import configureStore from './redux/configureStore'

import { registerScreens } from './screens'

class App {
  init(store) {
    registerScreens(store, Provider)

    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'example.pageOne',
                passProps: { description: 'This is page one' },
              },
            },
          ],
          options: {
            topBar: { title: { text: 'Welcome Screen' } },
          },
        },
      },
    })
  }
}

export let store = null
const initRedux = () =>
  configureStore((appStore) => {
    console.log('store dehyradated', appStore && appStore.getState())
    store = appStore
    new App().init(store)
  })

Navigation.events().registerAppLaunchedListener(initRedux)
