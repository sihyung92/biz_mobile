import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './src/screens/MainScreens';
import SignInScreen from './src/screens/SignInScreens';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';

const AppStack = createStackNavigator({ Main: MainScreen });      // 앱 메인 화면
const AuthStack = createStackNavigator({ SignIn: SignInScreen }); // 인증 화면

export default createAppContainer(createSwitchNavigator(
  {
  Authloading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack,
  },
  {
    initialRouteName: 'Authloading',
  }
));
