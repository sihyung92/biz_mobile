import React from 'react';
import { Text, Button } from 'react-native';

export default (props) => (<Button
    title = {'홈으로'}
    onPress={() => props.navigation.navigate('Home') }
/>)