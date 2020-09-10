import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from '../screens/MainScreens';
import SignInScreen from '../screens/SignInScreens';

const Stack = createStackNavigator();
let isSignedIn = false;

function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={isSignedIn ? "Main" : "SignIn"}
                screenOptions={{
                   gestureEnabled: true
                }}>
                {
                    isSignedIn
                        ? (
                        <>
                        <Stack.Screen name="Main" component={MainScreen}/>
                        </>
                        )
                        : 
                        (
                        <>
                        <Stack.Screen name="SignIn" component={SignInScreen}/>
                        </>
                        )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;
