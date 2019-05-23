import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import home from '../screens/home.js';
import dform from '../screens/dform.js';
import about from '../screens/about.js';
import req from '../screens/req.js';
import signup from '../screens/signup.js';
import signin from '../screens/signin.js';


const homepage = createStackNavigator({
  home: home,
  about: about,
  req: req,
  dform: dform,
  HomeScreen: HomeScreen,
});

homepage.navigationOptions = {
  tabBarLabel: ' ',
 /* tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),*/
};


const HomeStack = createStackNavigator({
  Home: HomeScreen,
  signup: signup,
  signin: signin,
});

HomeStack.navigationOptions = {
 tabBarLabel: ' ',
/* tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),*/
};

/*const LinksStack = createStackNavigator({
  Links: LinksScreen,
  dform: dform,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Donation',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  req: req,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Request',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};*/

export default createBottomTabNavigator({
  HomeStack,
  homepage,
 // LinksStack,
 // SettingsStack,
});
