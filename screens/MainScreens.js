import React from 'react';
import { StyleSheet, View, Text, Button, AsyncStorage } from 'react-native';

export default class MainScreen extends React.Component {
  static navigationOptions = {
      title: 'Main',
  }
  constructor(props) {
    super(props);
    this.state = {
      corpId: 418,
      email: "abc@kobiznet.com",
      password: "",
      roles: "A",
      userId: "",
      userName: "admin"
    }
  }
  _retrieveData = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      if (value !== null) {
        // We have data!!
        console.log(userId);
        return userId;
      }
    } catch (error) {
      // Error retrieving data
    }
  };

_logOut = async () => {
  try {
    await AsyncStorage.removeItem(
      'userToken'
    );
  } catch (error) {
    // Error saving data
  }
};

  render() {
    return (
      <View style={styles.container}>
      <Text value = {this._retrieveData()}>sihyung Main Screen</Text>
        <View>
            <Button
              title = 'logOut'
              onPress = {()=>this._logOut()}/>
          <View style={{flex: 1, flexDirection: 'row'}}> 
            <Button
              title = '로 그 인'
              onPress = {()=>this.props.navigation.navigate('SignIn')}/>
            <Button
              title = '화  면 2'/></View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Button
              title = '화  면 3'/>
            <Button
              title = '화  면 4'/>
          </View>
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