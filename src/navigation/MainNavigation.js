import * as React from 'react';
import { StyleSheet, View, Text, Button, Image ,ImageBackground  } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator,  DrawerContentScrollView,  DrawerItemList,  DrawerItem } from '@react-navigation/drawer';
import menuNavigationData from './menuNavigationData';
import DrawerScreensContainer from '../screens/DrawerScreensContainer';
import HomeScreensContainer from '../screens/HomeScreensContainer';

const Drawer = createDrawerNavigator();

//TODO : 메뉴를 코드로 연동하도록 수정해야함 (현재는 이름으로 검색), name도 state로 관리해야함
export default (props) =>  {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerScreensContainer {...props}/>}>
            <Drawer.Screen name={'Home'} component={HomeScreensContainer}/>
            {
                props.menuList.map((item, idx) => {
                    const data = menuNavigationData.find(data => data.code === item.MENU_NM_S);
                    if(!data){ return false; }
                    return (<Drawer.Screen
                        key={`stack_item-${idx + 1}`}
                        name={item.MENU_NM_S}
                        component={data.component}/>)
                })
            }
        </Drawer.Navigator>
    )
}
