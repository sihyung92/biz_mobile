import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Alert, Platform } from 'react-native';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
        title: 'Login',
  }
  constructor(props) {
    super(props);
    this.state = {
      corpId: 418,
      email: "",
      password: "",
      roles: "A",
      userID: "",
      userName: ""
    }
  }
  validateID(userID) {
    console.log("ID Valid : " + userID != null && userID.length === 0);
    return userID != null && userID.length === 0;
  }

  validatePassword(password) {
    console.log("pass Valid : " + password != null && password.length === 0);
    return password != null && password.length === 0;
  }

  // Send a POST request
  signIn = async() => {
    console.log(this.state);
    if(this.validateID(this.state.userID)){
      // Works on both Android and iOS
      const alertTitle = '아이디를 입력해주세요.'
      const alertText = '아이디를 입력해주세요.'
      if (Platform.OS === 'web') {
        alert(alertText)
      } else {
        Alert.alert(alertTitle, alertText)
      }
      return false;
    }
    if(this.validatePassword(this.state.password)){
      // Works on both Android and iOS
      const alertTitle = '비밀번호를 입력해주세요.'
      const alertText = '비밀번호를 입력해주세요.'
      if (Platform.OS === 'web') {
        alert(alertText)
      } else {
        Alert.alert(alertTitle, alertText)
      }
      return false;
    }

    const message = await axios.post('http://222.122.82.138/auth/signin',{
        corpId: this.state.corpId,
        email: this.state.email,
        password: this.state.password,
        roles: this.state.roles,
        userId: this.state.ID,
        userName: this.state.userName
      })
      .then( (response) => {
        console.log(response);
        console.log(response.data);
        AsyncStorage.setItem("token", response.data.token);
        this.props.navigation.navigate('Main');
      })
      .catch( (error) => {
        console.log(error);
        const alertTitle = '로그인 실패'
        const alertText = '아이디 / 비밀번호가 틀렸습니다.'
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
            onChangeText={text => this.setState({userID:text})}/>
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