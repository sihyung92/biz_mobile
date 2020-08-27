import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Alert, Platform, Picker } from 'react-native';
import { local, test } from '../constant/Constant'

export default class LoginScreen extends React.Component {
  static navigationOptions = {
        title: 'Login',
  }
  constructor(props) {
    super(props);
    this.state = {
      email: "abc@kobiznet.com",
      password: "",
      roles: "A",
      userId: "",
      userLang: "KO",
      corp: {
        corpId: "",
        corpNm: "",
      },
      corps: Array(0),
      langs: Array(0),
    }
  }
  
  validateIDAndAlert(userId) {
    if( userId != null && userId.length === 0 ){
      const alertTitle = '아이디를 입력해주세요.'
      const alertText = '아이디를 입력해주세요.'
      if (Platform.OS === 'web') {
        alert(alertText)
      } else {
        Alert.alert(alertTitle, alertText)
      }
      return false;
    }
  }

  validatePasswordAndAlert(password) {
    if( password != null && password.length === 0 ){
      const alertTitle = '비밀번호를 입력해주세요.'
      const alertText = '비밀번호를 입력해주세요.'
      if (Platform.OS === 'web') {
        alert(alertText)
      } else {
        Alert.alert(alertTitle, alertText)
      }
      return false;
    }
  }

  signIn = async() => {

    // if( !this.validateIDAndAlert(this.state.userId) ){
    //   return;
    // }

    // if( !this.validatePasswordAndAlert(this.state.password) ){
    //   return;
    // }
  
    const message = await axios.post(local + '/mobile/biz/login.json?flag=login',{
      loginInfo: {
        appTp	 : "W_MAPP",
        userPw : this.state.password,
        userId : this.state.userId,
      }
    })
    .then( (response) => {
      if ( !response.data.success ){
        const alertTitle = '로그인 실패'
        const alertText = '아이디 / 비밀번호가 틀렸습니다.'
        if (Platform.OS === 'web') {
          alert(alertText)
        } else {
          Alert.alert(alertTitle, alertText)
        }
        return;
      }

      console.log(response);
      AsyncStorage.setItem("token", response.data.token);
      this.setState({
        corps : response.data.corps,
        langs : response.data.langs
      });
      //this.props.navigation.navigate('Main');
    })
    .catch( (error) => {
        console.log(error);
        const alertTitle = '로그인 실패'
        const alertText = '서버에 오류가 발생하였습니다.'
        if (Platform.OS === 'web') {
          alert(alertText)
        } else {
          Alert.alert(alertTitle, alertText)
        }
    }) ;
  }

  render() {
    const corps = this.state.corps;
    const corpList = corps.map((corp, index) => {
       return (
        <Picker.Item 
          key={corp.corpId}
          label = {corp.corpNm}
          value = {corp.corpId} />
       )
    }) 
    return (
      <View style={styles.container}>
         <Text style={styles.logo}>한국비즈넷</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="ID..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({userId:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <Picker
          selectedValue={this.state.corp}
          onValueChange={corp => this.setState({ corp })}
          style={{ width: 160, postion: 'absolute',fontSize:10 }}
          mode="dropdown"
          itemStyle={{ color:'red', fontWeight:'900', fontSize: 18, padding:30}}>
        >
        {corpList}
        </Picker>
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


