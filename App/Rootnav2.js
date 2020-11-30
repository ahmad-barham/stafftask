import React, { Component } from 'react';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Time from './Time';
import Home from './Home';
import Date from './Date';
import Login from './Login';

const AppStack = createStackNavigator({
  Home: Home,
  Date: Date,

  Time: Time,
})

const AuthNavigator = createStackNavigator({
  LoginRoute: {
    screen: Login,
    navigationOptions: () => ({
      header: null
    })
  }
});
 const  AppContainer = createAppContainer(createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthNavigator
  },
  {
    initialRouteName: 'Auth',
  }
));
export default  AppContainer;
