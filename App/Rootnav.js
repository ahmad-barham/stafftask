import React, { Component } from 'react';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Time from './Time';
import Home from './Home';
import Date from './Date';
import Login from './Login';
import Register from './Register';
import Picerdata from "./picerdata";

const AppStack = createStackNavigator({
  Home: Home,
  Date: Date,

  Time: Time,
  Register:Register,

})


const AuthNavigator = createStackNavigator({
  LoginRoute: {
    screen: Login,
    navigationOptions: () => ({
      headerShown: null
    })
  },
});
 const  AppContainer = createAppContainer(createSwitchNavigator(
  {    Auth: AuthNavigator
,
    App: AppStack,
  },
  {
    initialRouteName: 'Auth',
  }
));
export default  AppContainer;
