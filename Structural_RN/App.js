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
import {  createSwitchNavigator, createAppContainer, createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation' 
import AuthLoadingScreen from './screens/AuthLoadingScreen'
import WelcomeScreen from './screens/AuthencationStack/WelcomeScreen';
import SignUpScreen from './screens/AuthencationStack/SignUpScreen';
import SignInScreen from './screens/AuthencationStack/SignInScreen';
import HomeScreen from './screens/AppStack/HomeScreen';
import SettingScreen from './screens/AppStack/SettingScreen';
import CreateMeetingScreen from './screens/MeetingStack/CreateMeeting';
import ListMeetingScreen from './screens/MeetingStack/ListMeeting';

const AuthencationStack = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen
},{
  headerMode: 'none'
})

const AppTabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Setting: SettingScreen
})

const MeetingTabNavigator = createBottomTabNavigator({
    CreateMeeting: CreateMeetingScreen,
    ListMeeting : ListMeetingScreen
})

const AppStackNavigator = createStackNavigator({
    AppTab: AppTabNavigator
})

const MeetingStackNavigator = createStackNavigator({
    Meeting: MeetingTabNavigator
})

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: AppStackNavigator,
    Meeting: MeetingStackNavigator
})

const AppContainer = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthencationStack,
  App: AppDrawerNavigator
})



export default createAppContainer(AppContainer)
