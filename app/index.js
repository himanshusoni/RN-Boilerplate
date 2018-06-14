import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
class App {
  init() {
    registerScreens();

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
    });
  }
}

Navigation.events().registerAppLaunchedListener(() => {
  new App().init();
})