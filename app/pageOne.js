/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * eslint-disable react/prefer-stateless-function
 */
import type { Node } from 'react'

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
})

type WBProps = {
  title: string,
  features: Array<string>,
}

const appFeatures = ['wix/react-native-navigation', 'eslint', 'flow', 'jest', 'storybook']
export const WelcomeBanner = ({ title, features }: WBProps): Node => (
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
        {title}
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
      {features.map((label: string, index: number) => (
        <Text
          key={index}
          style={{
            padding: 5,
            paddingLeft: 10,
            width: '100%',
          }}
        >
          {`- ${label}`}
        </Text>
      ))}
    </ScrollView>
  </View>
)

type Props = {}

/* eslint-disable react/prefer-stateless-function */
export default class App extends Component<Props> {
  render(): Node {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <WelcomeBanner title="Welcome to RN_Boilerplate" features={appFeatures} />
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
