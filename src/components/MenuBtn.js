import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

export default function MenuBtn(props) {
    return <TouchableOpacity
        style={{
            zIndex: 1,
            position: "absolute",
            left: 30,
            top: 30
        }}
        onPress={() => {
            props.navigation.dispatch(DrawerActions.toggleDrawer())}}>
        <Image
            style={{
                width: 30,
                height: 30
            }}
            source={require('../../assets/image/btn_mmenu.png')}/>
    </TouchableOpacity>
}
