import React from 'react';
import { View, Text, Button } from 'react-native';

export default class MainScreen extends React.Component {
  static navigationOptions = {
      title: 'Main',
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>sihyung Main Screen</Text>
      <Button
        title = 'Go Sign in screen'
        onPress = {()=>this.props.navigation.navigate('SignIn')}/>
      </View>
    );
  }
}