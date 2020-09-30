import React from 'react';
import { StyleSheet, View, Text, Image ,ImageBackground } from 'react-native';
import axios from 'axios';
import * as WebBrowser from 'expo-web-browser';
import Background from '../../assets/image/main_bg.png';
import { BASE_URL } from '../constant/Constant'
import MenuBtn from '../components/MenuBtn.js';

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
      alert('ERR');
    });
    
  }

  _handleOpenWithWebBrowser = (URL) => {
    WebBrowser.openBrowserAsync(URL);
  }

  render() {
    return (
      <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/image/main_bg.png')}
        style={styles.backgroundImage}>     
        <MenuBtn {...this.props}/>
        <View style={{flex:1}}/>
        <View style={styles.idView}>
            <View style= {{flex:2}}> 
              <Image
                style={styles.userIcon}
                source={require('../../assets/image/img_user.png')}/> 
            </View>
              <View style= {{flex:1, flexDirection: 'row'}}
                 onClick={() => this._handleOpenWithWebBrowser(BASE_URL+ '/checkuser.htm?id='+this.state.MYPAGE.MODIFY_KEY)}>
                <Text style={styles.idText}>아이디</Text>
                <Image 
                    style={styles.modifyImg}
                    source={require('../../assets/image/edit_ico.png')}/>
              </View>
        </View>
        <View style={{flex:1}}/>

        <View style={styles.userInfoBox}>
          <View style={styles.userInfoView}>
            <Text style={styles.infoText}>회사명</Text>
            <Text style={styles.contentText}>
              {this.state.MYPAGE.CORP_NM}
            </Text>
          </View>
          <View style={styles.hairline} />
          <View style={styles.userInfoView}>
            <Text style={styles.infoText}>이름</Text>
            <Text style={styles.contentText}>
              {this.state.MYPAGE.USER_NM}
            </Text>
          </View>
          <View style={styles.hairline} />
          <View style={styles.userInfoView}>
           <Text style={styles.infoText}>전화번호</Text>
           <Text style={styles.contentText}>
              {this.state.MYPAGE.TEL_NO}
            </Text>
          </View>
          <View style={styles.hairline} />
          <View style={styles.userInfoView}>
            <Text style={styles.infoText}>핸드폰번호</Text>
            <Text style={styles.contentText}>
              {this.state.MYPAGE.MOBILE_NO}
            </Text>
          </View>
          <View style={styles.hairline} />
          <View style={styles.userInfoView}>
            <Text style={styles.infoText}>이메일</Text>
            <Text style={styles.contentText}>
              {this.state.MYPAGE.EMAIL}
            </Text>
          </View>
        </View>

        <View style={{flex:3}}/>  
        </ImageBackground>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  backgroundImage:{
    width: '100%',
    height : '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  idView:{
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor:'blue',
  },
  idText:{
    fontFamily: 'NotoSansKR',
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 36,
    letterSpacing: -1.2,
    textAlign: 'left',
    color: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userIcon: {
    width: 60,
    height: 60
  },
  userInfoBox: {
    flex : 4,
    flexDirection:'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor:'white',
    fontFamily: 'NotoSansKR',
    fontSize: 16,
    fontWeight: 'normal',
    width: '80%',
    paddingTop: 10,
    paddingBottom: 20,
  },
  userInfoView: {
    flex : 1,
    flexDirection:'row',
  },
  hairline:{
    backgroundColor: '#A2A2A2',
    height: 1,
    alignSelf: 'center',
    width: '95%',
  },
  infoText:{
    fontFamily: 'NotoSansKR',
    flex:1,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 50,
    letterSpacing: -0.8,
    marginLeft: '5%',
    textAlign: 'left',
  },
  contentText:{
    fontFamily: 'NotoSansKR',
    flex: 2,
    height: 100,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 50,
    letterSpacing: -0.8,
    textAlign: 'left',
  },
   modifyImg:{
    marginTop: 17,
    width: 12.2,
    height: 12.2,
  },
});