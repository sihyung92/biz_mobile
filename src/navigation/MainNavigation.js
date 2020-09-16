import * as React from 'react';
import { StyleSheet, View, Text, Button, Image ,ImageBackground  } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator,  DrawerContentScrollView,  DrawerItemList,  DrawerItem } from '@react-navigation/drawer';
import menuNavigationData from './menuNavigationData';
import CustomDrawerContent from '../screens/DrawerScreensContainer';

const Drawer = createDrawerNavigator();

export default class MainNavigation extends React.Component {
    render() {
        return (
            <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props}/>}>
                {
                    menuNavigationData.map((item, idx) => (
                        <Drawer.Screen
                            key={`stack_item-${idx + 1}`}
                            name={item.name}
                            component={item.component}/>
                    ))
                }
            </Drawer.Navigator>
        )
    }
}
