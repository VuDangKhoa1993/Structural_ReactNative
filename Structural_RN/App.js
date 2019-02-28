/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {  createSwitchNavigator, createAppContainer } from 'react-navigation' 
import AuthLoadingScreen from './screens/AuthLoadingScreen'



const App = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen
})



export default createAppContainer(App)
