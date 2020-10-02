import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigationContainer from './MainNavigationContainer';
import SignInScreensContainer from '../screens/SignInScreensContainer';
import MyPageScreensContainer from '../screens/MyPageScreensContainer';

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
                        <Stack.Screen
                            name="Main"
                            component={MainNavigationContainer}
                            options={{
                                title: '메인메인메인',
                            }}
                        />
                        <Stack.Screen
                            name="MyPage"
                            component={MyPageScreensContainer}
                            options={{
                                title: '마이마이마이',
                            }}
                        />
                        </>
                        )
                        : 
                        (
                        <>
                        <Stack.Screen
                            name="SignIn"
                            component={SignInScreensContainer}
                            options={{
                                title: '로그인로그인로그인',
                            }
                        }/>
                        </>
                        )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;
