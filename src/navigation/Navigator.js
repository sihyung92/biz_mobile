import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from '../screens/MainScreens';
import SignInScreensContainer from '../screens/SignInScreensContainer';

const Stack = createStackNavigator();

function Navigator(props) {
    const { isLogin } = props;

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={isLogin ? "Main" : "SignIn"}
                screenOptions={{
                   gestureEnabled: true
                }}>
                {
                    isLogin
                        ? (
                        <>
                        <Stack.Screen name="Main" component={MainScreen}/>
                        </>
                        )
                        : 
                        (
                        <>
                        <Stack.Screen name="SignIn" component={SignInScreensContainer} />
                        </>
                        )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;
