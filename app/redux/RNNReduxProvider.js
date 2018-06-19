import React, { Component } from 'react'
// import { Linking, SafeAreaView, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'

function registerContainer(containerName: string, generator: Function) {
  Navigation.registerComponent(containerName, generator)
}

export function registerContainerWithRedux(containerName: string, comp, store, Provider) {
  const generatorWrapper = () => {
    const InternalComponent = comp

    return class Scene extends Component {
      constructor(props) {
        super(props)
      }
      onNavigationButtonPressed(id) {
        const instance = this.refs.child.getWrappedInstance()
        if (instance && instance.onNavigationButtonPressed) {
          instance.onNavigationButtonPressed(id)
        }
      }

      didAppear(id) {
        const instance = this.refs.child.getWrappedInstance()
        if (instance && instance.didAppear) {
          instance.didAppear(id)
        }
      }

      didDisappear(id) {
        const instance = this.refs.child.getWrappedInstance()
        if (instance && instance.didDisappear) {
          instance.didDisappear(id)
        }
      }

      render() {
        return (
          <Provider store={store}>
            <InternalComponent ref="child" {...this.props} />
          </Provider>
        )
      }
    }
  }

  registerContainer(containerName, generatorWrapper)
}

export default registerContainerWithRedux
