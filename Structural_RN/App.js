/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { createSwitchNavigator, createAppContainer, createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation'
import AuthLoadingScreen from './screens/AuthLoadingScreen'
import WelcomeScreen from './screens/AuthencationStack/WelcomeScreen';
import SignUpScreen from './screens/AuthencationStack/SignUpScreen';
import SignInScreen from './screens/AuthencationStack/SignInScreen';
import HomeScreen from './screens/AppStack/HomeScreen';
import SettingScreen from './screens/AppStack/SettingScreen';
import CreateMeetingScreen from './screens/MeetingStack/CreateMeeting';
import ListMeetingScreen from './screens/MeetingStack/ListMeeting';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ExploreScreen from './screens/AirbnbStack/Explore'
import InboxScreen from './screens/AirbnbStack/Inbox'
import TripScreen from './screens/AirbnbStack/Trips'
import SavedScreen from './screens/AirbnbStack/Saved'
import ProfileScreen from './screens/AirbnbStack/Profile'


const AuthencationStack = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen
})

const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Setting: {
    screen: SettingScreen
  },
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 'md-home'
            break;
          case 'Setting':
            iconName = 'md-settings'
            break;
          default:
            iconName = 'md-alert'
            break;
        }
        return (<Ionicons name={iconName} color={tintColor} size={20}></Ionicons>)
      }
    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    }
  })

const AirbnbTabNavigator = createBottomTabNavigator({
  Explore: {
    screen: ExploreScreen,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({tintColor}) => (
        <Ionicons name= 'md-search' color={tintColor} size={24}></Ionicons>
      )
    })
  },
  Saved: {
    screen: SavedScreen,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'SAVED',
      tabBarIcon: ({tintColor}) => (
        <Ionicons name= 'md-heart-empty' color={tintColor} size={24}></Ionicons>
      )
    })
  },
  Trips: {
    screen: TripScreen,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'TRIPS',
      tabBarIcon: ({tintColor}) => (
        <Image source = {{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdfMakOrNaxmgEME1H8JWkddXFvbCycbM1RfbwuSnXmi_AaWV'}} style = {{width: 24, height: 24}} />
      )
    })
  },
  Inbox: {
    screen: InboxScreen,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'INBOX',
      tabBarIcon: ({tintColor}) => (
        <Ionicons name= 'md-chatboxes' color={tintColor} size={24}></Ionicons>
      )
    })
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({tintColor}) => (
        <Ionicons name= 'md-person' color={tintColor} size={24}></Ionicons>
      )
    })
  }
}, {
  initialRouteName: 'Explore',
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: {width: 5, height: 3},
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
})

const AppStackNavigator = createStackNavigator({
  AppTab: {
    screen: AppTabNavigator,
    navigationOptions: ({ navigation }) => ({
      title: 'Intargram',
      headerStyle : {
        backgroundColor: 'white'
      },
      headerTitleStyle: {
        fontFamily: 'area'
      },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{ paddingHorizontal: 10 }}>
            <Ionicons name='md-menu' size={24}></Ionicons>
          </View>
        </TouchableOpacity>
      ),
      headerRight: (
        <View style={{
          flex: 1,
          flexDirection: 'row'
        }}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <View style={{ paddingHorizontal: 10 }}>
              <Ionicons name='md-tv' size={24} color='gray' />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <View style={{ paddingHorizontal: 10 }}>
              <Ionicons name='md-navigate' size={24} color='gray' />
            </View>
          </TouchableOpacity>
        </View>
      )
    })
  },

})

const AirbnbStackNavigator = createStackNavigator({
  AirbnbStack: AirbnbTabNavigator
}, {
  headerMode: 'none'
})

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: AppStackNavigator,
  Airbnb: AirbnbStackNavigator
})

const AppContainer = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthencationStack,
  App: AppDrawerNavigator
}, {
    initialRouteName: 'AuthLoading'
  })




export default createAppContainer(AppContainer)
