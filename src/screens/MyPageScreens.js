import React from 'react';
import { StyleSheet, View, Text, Button, AsyncStorage, Image ,ImageBackground, TouchableOpacity,Linking } from 'react-native';
import axios from 'axios';
import Background from '../../assets/image/main_bg.png';
import { BASE_URL } from '../constant/Constant'

export default class HomeScreens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MYPAGE :[]
    }
  }
  
  // 갖고올 주소 
  componentDidMount(){
    /*axios.post(BASE_URL+ '/mobile/biz/myPage.do')
    .then(response => this.setState({MYPAGE: response.data}))
    */
    axios.post(BASE_URL+ '/mobile/biz/myPage.do',{
      phoneId :'TESTPHONE:19:09:10',
      token :'4UrYiE2680915i4sdlep2019011022',
      ssGrpSpcNm :'KR0001'
      
    })
    .then(response => this.setState({MYPAGE: response.data}))
    .catch(function (error) {
      alert("ERR");
    });
    
  }
  
  _retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem('key');
      if (value !== null) {
        return value;
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  render() {
    return (
      <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/image/main_bg.png')}
        style={styles.backgroundImage}>     
      <Image
          style={{ width: 60,
          height: 60}}
          source={require('../../assets/image/img_user.png')}/>

        <View style={styles.ID_MODIFY_V}>
              <Text style={styles.ID_MODIFY}>아이디</Text>
              <View
              onClick={() => Linking.openURL(BASE_URL+ '/checkuser.htm?id='+this.state.MYPAGE.MODIFY_KEY)}>
              <Image 
                  style={styles.modify_IMG}
                  source={require('../../assets/image/edit_ico.png')}/>
              </View>
        </View>
        
        <View style={styles.WIDE}>


          <View>
          <Text style={styles.LEFT_TEXT}>회사명</Text>
          <Text style={styles.LEFT_TEXT}>이름</Text>
          <Text style={styles.LEFT_TEXT}>전화번호</Text>
          <Text style={styles.LEFT_TEXT}>핸드폰번호</Text>
          <Text style={styles.LEFT_TEXT}>이메일</Text>
          </View>  

          <View>
            <Text></Text>
            <Text style={styles.RIGHT_TEXT}>
              : {this.state.MYPAGE.CORP_NM}
            </Text>
            <Text style={styles.RIGHT_TEXT}>
              : {this.state.MYPAGE.USER_NM}
            </Text>
            <Text style={styles.RIGHT_TEXT}>
              : {this.state.MYPAGE.TEL_NO}
            </Text>
            <Text style={styles.RIGHT_TEXT}>
              : {this.state.MYPAGE.MOBILE_NO}
            </Text>
            <Text style={styles.RIGHT_TEXT}>
              : {this.state.MYPAGE.EMAIL}
            </Text>
           
          </View>

        </View>  
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
  ID_MODIFY:{
    //fontFamily: "NotoSansKR",
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 36,
    letterSpacing: -1.2,
    textAlign: "left",
    color: "#ffffff"
  },
  ID_MODIFY_V:{
    flexDirection: 'row'
  },
  WIDE:{
    flexDirection: 'row'

  } ,

  LEFT_TEXT:{
    //fontFamily: "NotoSansKR",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: -0.8,
    textAlign: "left",
    color: "#707070"
  },

  RIGHT_TEXT:{
    //fontFamily: "NotoSansKR",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: -0.8,
    textAlign: "left",
    color: "#707070"
  },
   modify_IMG:{
    marginTop :17,
    width: 12.2,
    height: 12.2,
  },
});