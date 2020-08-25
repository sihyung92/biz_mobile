import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Alert, Platform } from 'react-native';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
        title: 'Login',
  }

  // Send a POST request
  signIn = async() => {
    const message = await axios.post('http://222.122.82.138/auth/signin',{
        corpId: 418,
        email: "abc@biznet.com",
        password: "admin123",
        roles: "A",
        userId: "admin",
        userName: "admin"
      })
      .then( (response) => {
        console.log(response);
        console.log(response.data);
        AsyncStorage.setItem("token", response.data.token);
        this.props.navigation.navigate('Main');
      })
      .catch( (error) => {
        console.log(error);
        // Works on both Android and iOS
        const alertTitle = '비밀번호 틀림'
        const alertText = '비밀번호가 틀렸습니다.'
        if (Platform.OS === 'web') {
          alert(alertText)
        } else {
          Alert.alert(alertTitle, alertText)
        }
      }) ;

    // const message = await axios.get('http://localhost:8080/mobile/biz/login.json?flag=login',{
    //   loginInfo: {
    //     appTp	 : "W_MAPP",
    //     userPw : "admin12",
    //     userId : "ADMIN",
    //   }
    // })
    // .then( (response) => {
    //   console.log(response);
    //   console.log(response.data);
    //   AsyncStorage.setItem("token", response.data.token);
    //   this.props.navigation.navigate('Main');
    // })
    // .catch( (error) => {
    //   console.log(error);
    // }) ;
  }

  render() {
    return (
      <View style={styles.container}>
         <Text style={styles.logo}>한국비즈넷</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="ID..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ID:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>

        <TouchableOpacity 
          style={styles.loginBtn}
          onClick={()=>this.signIn()}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
});