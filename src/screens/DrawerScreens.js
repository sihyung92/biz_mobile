import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, Image ,ImageBackground  } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { DrawerActions } from '@react-navigation/native';
import { DrawerContentScrollView,  DrawerItemList,  DrawerItem } from '@react-navigation/drawer';

const serviceCenterURL = "http://crm.kobiznet.co.kr/Default.aspx";
const _handleOpenWithWebBrowser = (URL) => {
    WebBrowser.openBrowserAsync(URL);
}

export default function CustomDrawerContent(props) {
  return (
    <View style={styles.sideBarOut}>
        <View style={styles.UP}>
          <ImageBackground
            source={require('../../assets/image/toggle_bg.png')}
            style={styles.backgroundImage}>
              <View style={styles.WIDE1}>
                  <View style={styles.padding}/>
                  <Image style={styles.H_L_IMG} source={require('../../assets/image/home.png')}
                    onPress={() => props.navigation.navigate('Home')}/>
                  <Text style={styles.H_L}
                      onPress={() => props.navigation.navigate('Home')}>
                  HOME</Text>
                  <Text style={styles.pipe}>
                      |
                  </Text>
                  <Image
                      style={styles.H_L_IMG}
                      source={require('../../assets/image/logout.png')}
                      onPress={() => props.logOut()}/>
                  <Text style={styles.H_L}
                    onPress={() => props.logOut()}>LOGOUT</Text>
                  <View style={styles.padding}/>
              </View>
              <View style={styles.WIDE2}>
                  <View style={styles.padding}/>
                  <Image
                      style={{ flex:1, maxWidth: 40,
                        maxHeight: 40}
                      }
                      source={require('../../assets/image/img_muser.png')}/>
                  <Text style={styles.C}
                      onPress={() => props.navigation.navigate('MyPage')}>
                      {props.corpNm}</Text>
                  <TouchableOpacity
                    style={styles.modify_IMG}
                    onPress={() => props.navigation.navigate('MyPage')}>
                  <Image
                      style={{width:15, height:15}}
                      source={require('../../assets/image/edit_ico.png')}/>
                  </TouchableOpacity>
                  <View style={styles.padding}/>
              </View>
              <View style={styles.WIDE3}>
                  <View style={styles.padding}/>
                  <View style={styles.round}>
                      <Image
                          style={styles.S_O_IMG}
                          source={require('../../assets/image/ic_speaker.png')}
                          onClick={() => _handleOpenWithWebBrowser(serviceCenterURL)}/>
                      <Text style={styles.S_O}
                        onPress={() => _handleOpenWithWebBrowser(serviceCenterURL)}>
                          고객센터</Text>
                  </View>
                  <View style={styles.round}>
                      <Image
                          style={styles.S_O_IMG}
                          source={require('../../assets/image/ic_settings.png')}/>
                      <Text style={styles.S_O}>
                          설정</Text>
                  </View>
                  <TouchableOpacity
                    style = {styles.cancelround}
                    onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}> 
                    <Image
                        style={styles.closeImg}
                        source={require('../../assets/image/ic_close.png')}
                        />
                  </TouchableOpacity>
                  <View style={styles.padding}/>
              </View>
          </ImageBackground>
        </View>

        <View style={styles.Down}>
            <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
            </DrawerContentScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sideBarOut :{
    flex: 1
  },
  UP : {
    flex: 1,
    alignItems:'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  Down:{
    flex: 2.5,
    flexDirection: 'column',
  },
  backgroundImage :{
    flex: 1,
    alignItems:'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minWidth:'100%',
    maxWidth:'100%',
  },
  WIDE1:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth:'100%',
    maxWidth:'100%',
  },
  WIDE2:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth:'100%',
    maxWidth:'100%',
  },
  WIDE3:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    minWidth:'100%',
    maxWidth:'100%',
  },
  S_O_IMG:{
    flex: 1,
    flexDirection:'row',
    maxWidth: 15,
    maxHeight: 15,
  },
  modify_IMG:{
    zIndex: 1,
    width: 14,
    height: 14,
  },
  round:{
    justifyContent:'space-around',
    alignItems:'center',
    width: 82,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#002254",
    flexDirection: 'row',
  },
  cancelround :{
    zIndex: 1,
    justifyContent:'center',
    alignItems:'center',
    width: 50,
    height: 50,
    backgroundColor: "#367fff",
    borderRadius: 100,
  },
  H_L_IMG :{
    flex: 1,
    flexDirection:'row',
    maxWidth: 15,
    maxHeight: 15,
  },
  H_L :{
    flex: 2,
    flexDirection:'row',
    //fontFamily: "NotoSansKR",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    //lineHeight: 20,
    letterSpacing: -0.7,
    textAlign: "left",
    paddingLeft: 3,
    color: "#ffffff",
  },
  pipe:{
    flex: 1,
    flexDirection:'row',
    fontSize: 14,
    color: "#ffffff",
    textAlign: "center",
  },
  C:{
    width: 113,
    height: 28,
    //fontFamily: "NotoSansKR",
    fontSize: 19,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: -0.95,
    textAlign: "left",
    color: "#ffffff"
  },
  S_O:{
    flex: 3,
    flexDirection:'row',
   // fontFamily: "NotoSansKR",
    fontSize: 15,
    fontWeight: "normal",
    fontStyle: "normal",
    textAlign: "center",
    color: "#ffffff"
  },
  closeImg:{
    width: 17,
    height: 17,                             
  },
  padding:{
    width: 15,
    backgroundColor:'black',
  },
})