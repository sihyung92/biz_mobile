import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Alert, Platform, Picker, ImageBackground, Image } from 'react-native';
import { BASE_URL } from '../constant/Constant'

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',   
    header: null,
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
      corps: [],
      langs: [],
      isLogin : false,
      token : "",
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
    return true;
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
    return true;
  }

  updateCorp(corpId){
    try {
      const corpNm  = this.state.corps.find(corp => corp.corpId == corpId).corpNm;
      this.setState({corp:{corpNm : corpNm , corpId : corpId}});
    } catch (error) {
    }
  }

  signIn = async() => {

    if( !this.validateIDAndAlert(this.state.userId) ){
      return;
    }

    if( !this.validatePasswordAndAlert(this.state.password) ){
      return;
    }
  
    const message = await axios.post(BASE_URL + '/mobile/biz/login.json?flag=login',{
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

      this.setState({
        corps : response.data.corps,
        langs : response.data.langs,
        token : response.data.token,
        isLogin : true,
      });
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

  goToMain = () => {
    if( !this.state.corp.corpId ){
      const alertTitle = '서버를 선택해주세요.'
      const alertText = '서버를 선택해주세요.'
      if (Platform.OS === 'web') {
        alert(alertText)
      } else {
        Alert.alert(alertTitle, alertText)
      }
      return;
    }
    AsyncStorage.setItem("corpId", this.state.corp.corpId);
    AsyncStorage.setItem("corpNm", this.state.corp.corpNm);
    AsyncStorage.setItem("token", this.state.token);
    this.props.navigation.navigate('Main');
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}>
        <View style = {styles.logo}>
          <Image
          style={{width : '30%' , height: '30%'}} 
          source={require('../assets/image/logo_1540.png')}/>
        </View>
        <View style={styles.input}>
          <View style={styles.IdInputView} >
            <Image
            style={{flex:1, flexDirection:'row'}} 
            source={require('../assets/image/ic_user.png')}/>
            <TextInput  
              style={styles.inputId}
              placeholder="ID..." 
              onChangeText={text => this.setState({userId:text})}/>
          </View>
          <View style={styles.PasswordInputView} >
            <Image
            style={{flex:1, flexDirection:'row'}} 
            source={require('../assets/image/ic_pw.png')}/>
            <TextInput  
              secureTextEntry
              style={styles.inputPassword}
              placeholder="Password..." 
              onChangeText={text => this.setState({password:text})}/>
          </View>
        </View>
        {
          this.state.isLogin && <View style={styles.combo}>
          <Picker
            selectedValue={this.state.corp.corpId}
            onValueChange={ (corpId) => this.updateCorp(corpId) }
            mode="dropdown"
          >
          <Picker.Item key={0} label = "Please Select Server..." value = ""/>
          {
            this.state.corps.map((corp, index) => 
              <Picker.Item 
              key={corp.corpId}
              label = {corp.corpNm}
              value = {corp.corpId} />
            )
          }
          </Picker>
        </View>
        }
        <View style={styles.button}>
          <TouchableOpacity 
            style={styles.loginBtn}
            onClick={this.state.isLogin ? () => this.goToMain() : () => this.signIn()}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <View style={styles.signUpBtns}>
            <TouchableOpacity>
            <Text style={styles.loginText}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.loginText}>비밀번호 찾기</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex : 2, flexDirection : "row"}} />
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage:{
    width: "100%",
    height : "100%",
  },
  logo:{
    flex:3,
    backgroundColor:'yellow',
    alignItems:"center",
    justifyContent:"center",
  },
  input:{
    flex: 1,
    flexDirection:'column',
    backgroundColor:"blue",
    alignItems:"center",
    justifyContent:"center",
  },
  combo:{
    flex: 1,
    flexDirection:'row',
    backgroundColor:"red",
    alignItems:"center",
    justifyContent:"center",
  },
  button:{
    flex: 1,
    flexDirection:'column',
    height:100,
    backgroundColor:"green",
    alignItems:"center",
    justifyContent:"center",
  },
  IdInputView:{
    flex:1,
    flexDirection:'row',
    width: "80%",
    height: 50,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#d9d9d9",
    marginBottom: 14,
  },
  PasswordInputView:{
    flex:1,
    flexDirection:'row',
    width: "80%",
    height: 50,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#d9d9d9",
  },
  inputId:{
    flex:4,
    flexDirection:"row",
    height: 50,
    backgroundColor: "#f9f9f9",
    //fontFamily: "NotoSans",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "left",
    color: "#c9c9c9",
  },
  inputPassword:{
    flex:4,
    flexDirection:"row",    
    height: 50,
    //fontFamily: "NotoSans",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "left",
    color: "#c9c9c9",
  },
  loginBtn:{
    width: "80%",
    height: 50,
    borderRadius: 5,
    backgroundColor: "#ff6658",
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,

  },
  loginText:{
    //fontFamily: "NotoSans",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: "#ffffff",
  },
  signUpBtns:{
    flex:1,
    flexDirection:'row',
  },
});


