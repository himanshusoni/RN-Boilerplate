/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
})

const features = ['wix/react-native-navigation', 'eslint', 'flow', 'jest', 'storybook']
export const WelcomeBanner = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      margin: 10,
      padding: 5,
      borderWidth: 1,
    }}
  >
    <View style={{ height: 40, justifyContent: 'center' }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
          justifyContent: 'center',
        }}
      >
        Welcome to RN_Boilerplate
      </Text>
    </View>
    <ScrollView
      style={{
        borderTopWidth: 1,
        borderColor: 'black',
        marginTop: 5,
        width: '100%',
      }}
    >
      {features.map(title => (
        <Text
          style={{
            padding: 5,
            paddingLeft: 10,
            width: '100%',
          }}
        >
          {`- ${title}`}
        </Text>
      ))}
    </ScrollView>
  </View>
)

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <WelcomeBanner />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
