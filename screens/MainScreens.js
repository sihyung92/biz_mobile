import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class MainScreen extends React.Component {
  static navigationOptions = {
      title: 'Main',
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>sihyung Main Screen</Text>
        <View>
          <Button
            title = 'Go Sign in screen'
            onPress = {()=>this.props.navigation.navigate('SignIn')}/>
          <Button
            title = 'Go Sign in screen'/>
          <Button
            title = 'Go Sign in screen'/>
          <Button
            title = 'Go Sign in screen'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
     flex: 1, alignItems: 'center', justifyContent: 'center'
  },
})