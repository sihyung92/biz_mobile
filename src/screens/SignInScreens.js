import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Platform, ImageBackground, Image, Picker } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { BASE_URL } from '../constant/Constant';
import { passwordValidator, IDValidator, AlertAllPlatform } from '../core/util';
import RNPickerSelect from 'react-native-picker-select';
import Loader from '../components/Loader';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      userId: "",
      corps: [],
      langs: [],
      selectedCorp: "",
      loading: false,
    }
  }

  signIn = async() => {
    if( !IDValidator(this.state.userId) ){
      return;
    }
    if( !passwordValidator(this.state.password) ){
      return;
    }
    this.setState({...this.state, loading: true});

    const message = await axios.post(BASE_URL + '/mobile/biz/login.json?flag=login',{
      loginInfo: {
        appTp	 : "W_MAPP",
        userPw : this.state.password,
        userId : this.state.userId,
      }
    })
    .then( (response) => {
      this.setState({...this.state, loading: false});
      if ( !response.data.success ){
        const alertTitle = '로그인 실패'
        const alertText = '아이디 / 비밀번호가 틀렸습니다.'
        AlertAllPlatform(alertText, alertTitle);
        return;
      } 
      const userToken = response.data.userToken; 
      this.setState({corps: response.data.corps});
      this.setState({langs: response.data.langs});
      this.props.signIn(this.state.userId, userToken);
    })
    .catch( (error) => {
      console.log(error);
      const alertTitle = '로그인 실패'
      const alertText = '서버에 오류가 발생하였습니다.'
      AlertAllPlatform(alertText, alertTitle);
    })
  }

  updateCorp = (corpId) => {
    const corpNm  = this.state.corps.find(corp => corp.corpId == corpId).corpNm;
    this.setState({selectedCorp: {corpId: corpId, corpNm: corpNm}});
    this.props.updateCorp(corpId,corpNm);
  }

  goToMain = () => {
    if( !this.props.corp.corpId ){
      const alertTitle = '서버를 선택해주세요.'
      const alertText = '서버를 선택해주세요.'
      AlertAllPlatform(alertText,alertTitle);
      return;
    }
    this._getMenuList(this.props.corp.corpId, this.state.userId);
    this.props.logIn(this.props.corp.corpId, this.props.corp.corpNm);
  }

  _getMenuList = async(userId, corpId) => {
    await axios.post(BASE_URL
     + '/mobile/biz/getMenuList.do',{
      phoneId	 : '38:30:F9:66:68:5A',
      token : 'cVYjMT78408179OyOUQQ2020572611',
      ssGrpSpcNm : 'KR0001' ,
      corpId : corpId,
      userId : userId,
    })
    .then( (response) => {
      if ( !response.data.success ){
        const alertTitle = '메뉴 로딩 실패'
        const alertText = '메뉴 로딩에 실패했습니다.'
        AlertAllPlatform(alertText, alertTitle);
        return;
      }
      const loadedMenu = response.data.data;  
      this.props.loadMenu(loadedMenu);
    })
    .catch( (error) => {
      console.log(error);
      const alertTitle = '메뉴 로딩 실패'
      const alertText = '서버 접속에 실패했습니다.'
      AlertAllPlatform(alertText, alertTitle);
    });
  }

  _handleOpenWithWebBrowser = (URL) => {
    WebBrowser.openBrowserAsync(URL);
  }

  /* 현재 로컬스토리지(asyncStorage 사용하고 있지 않음, state로 로그인 정보 등 관리 중) */
  // _storeData = async (key, value) => {
  //   try {
  //     await AsyncStorage.setItem( key, JSON.stringify(value) );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/image/main_bg.png')}
          style={styles.backgroundImage}>
        <Loader loading = { this.state.loading }/>
        <View style = {styles.logo}>
          <Image
          style={{width : 167.3 , height: 44.2}} 
          source={require('../../assets/image/logo_1540.png')}/>
        </View>
        <View style={styles.input}>
          <View style={this.props.isSignedIn ? styles.IdInputViewAfterSignedIn : styles.IdInputView}>
            <View
              style={{flex:1, flexDirection:'row', alignItems:"center", justifyContent:"center",}}
            >
              <Image
              style={{width:18, height:17}} 
              source={require('../../assets/image/ic_user.png')}/>
            </View>
            <TextInput  
              id = "idInput"
              style={this.props.isSignedIn ? styles.inputIdAfterSignedIn : styles.inputId}
              placeholder="아이디"
              editable={!this.props.isSignedIn}
              value={this.state.userID}
              onInput={(e) => e.target.value = ("" + e.target.value.replace(/[^A-Za-z0-9]/g, '')).toUpperCase()} //대문자, 숫자만 받음
              onChangeText={text => this.setState({userId: text})}/>
          </View>
          <View style={this.props.isSignedIn ? styles.PasswordInputViewAfterSignedIn : styles.PasswordInputView} >
            <View
              style={{flex:1, flexDirection:'row', alignItems:"center", justifyContent:"center",}}
            >
              <Image
              style={{width:18, height:17}} 
              source={require('../../assets/image/ic_pw.png')}/>
            </View>
            <TextInput  
              secureTextEntry
              id = "pwInput"
              editable={!this.props.isSignedIn}
              style={this.props.isSignedIn ? styles.inputPasswordAfterSignedIn: styles.inputPassword}
              placeholder="비밀번호" 
              onChangeText={text => this.setState({password: text})}/>
          </View>
        </View>
        {
        this.props.isSignedIn && <View style={styles.combo}>
          <Picker
                style={styles.picker} itemStyle={styles.pickerItems}
                selectedValue={this.state.selectedCorp.corpId}
                onValueChange={ (corpId) => this.updateCorp(corpId) }
          >
              <Picker.Item key={0} label = "회사를 선택해주세요." value = ""/>
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
            onPress={this.props.isSignedIn? () => this.goToMain() : () => this.signIn()}>
            <Text style={styles.loginText}>로그인</Text>
          </TouchableOpacity>
          <View style={styles.signUpBtns}>
            <TouchableOpacity
              onPress={() => this._handleOpenWithWebBrowser("https://global.gsabis.com/forgot.htm")}>
              <Text style={styles.signUpText}>비밀번호 찾기</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.devideLine}>  |  </Text>
            </View>
            <TouchableOpacity 
              onPress={() => this._handleOpenWithWebBrowser("https://global.gsabis.com/user/register.htm")}>
              <Text style={styles.signUpText}>회원가입</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage:{
    width: "100%",
    height : "100%",
  },
  logo:{
    flex:3,
    //backgroundColor:'yellow',
    alignItems:"center",
    justifyContent:"center",
  },
  input:{
    flex: 1,
    flexDirection:'column',
    //backgroundColor:"blue",
    alignItems:"center",
    justifyContent:"center",
    paddingTop:20,
    paddingBottom:20,
  },
  combo:{
    flex: 1,
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"center",
  },
  picker: {
    width: '60%',
    //height: 40,
    //backgroundColor: 'white',
    //borderColor: 'black',
    //borderWidth: 1,
  },
  pickerItems: {
    height: 40,
    fontSize : 11,
  },
  button:{
    flex: 1,
    flexDirection:'column',
    height:100,
    alignItems:"center",
    justifyContent:"center",
  },
  IdInputView:{
    flex:1,
    flexDirection:'row',
    width: "80%",
    minHeight: 40,
    maxHeight: 40,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#d9d9d9",
    marginBottom: 14,
  },
  IdInputViewAfterSignedIn:{
    flex:1,
    flexDirection:'row',
    width: "80%",
    minHeight: 40,
    maxHeight: 40,
    borderRadius: 5,
    backgroundColor: "#e5e5e5",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#d9d9d9",
    marginBottom: 14,
  },
  PasswordInputView:{
    flex:1,
    flexDirection:'row',
    width: "80%",
    minHeight: 40,
    maxHeight: 40,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#d9d9d9",
  },
  PasswordInputViewAfterSignedIn:{
    flex:1,
    flexDirection:'row',
    width: "80%",
    minHeight: 40,
    maxHeight: 40,
    borderRadius: 5,
    backgroundColor: "#e5e5e5",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#d9d9d9",
  },
  inputId:{
    flex:8,
    flexDirection:"row",
    backgroundColor: "#f9f9f9",
    fontFamily: "NotoSansKR",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "left",
  },
  inputIdAfterSignedIn:{
    flex:8,
    flexDirection:"row",
    backgroundColor: "#e5e5e5",
    fontFamily: "NotoSansKR",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "left",
    color: "#cccccc",
  },
  inputPassword:{
    flex:8,
    flexDirection:"row",    
    fontFamily: "NotoSansKR",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "left",
  },
  inputPasswordAfterSignedIn:{
    flex:8,
    flexDirection:"row",    
    fontFamily: "NotoSansKR",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "left",
    backgroundColor: "#e5e5e5",
    color: "#cccccc",
  },
  loginBtn:{
    width: "80%",
    height: 40,
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
    marginBottom:10,  
  },
  loginText:{
    fontFamily: "NotoSansKR",
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  signUpText:{
    fontFamily: "NotoSansKR",
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  devideLine:{
    fontSize: 15,
    color: "#c9c9c9",
  },
  signUpBtns:{
    flex:1,
    flexDirection:'row',
  },
});
