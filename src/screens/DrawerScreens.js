import * as React from 'react';
import { StyleSheet, View, Text, Button, Image ,ImageBackground  } from 'react-native';
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
        <ImageBackground
            source={require('../../assets/image/toggle_bg.png')}
            style={styles.backgroundImage}>
            <View style={styles.UP}>
                <View style={styles.Vertical}>
                    <View style={styles.WIDE1}>
                        <Image style={styles.H_L_IMG} source={require('../../assets/image/home.png')}/>
                        <Text style={styles.H_L}>HOME</Text>
                        <Text style={styles.H_L}>
                            |
                        </Text>
                        <Image
                            style={styles.H_L_IMG}
                            source={require('../../assets/image/logout.png')}
                            onPress={() => props.logOut()}/>
                        <Text style={styles.H_L}
                          onPress={() => props.logOut()}>LOGOUT</Text>
                    </View>
                    <View style={styles.WIDE2}>
                        <Image
                            style={{ width: 40,
                              height: 40}
                            }
                            source={require('../../assets/image/img_muser.png')}/>
                        <Text style={styles.C}>
                            회사이름</Text>
                        <Image
                            style={styles.modify_IMG}
                            source={require('../../assets/image/edit_ico.png')}/>
                    </View>

                    <View style={styles.WIDE3}>
                        <View style={styles.round}>
                            <Image
                                style={styles.S_O_IMG}
                                source={require('../../assets/image/ic_speaker.png')}
                                onPress={() => _handleOpenWithWebBrowser(serviceCenterURL)}/>
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
                    </View>

                    <View style={styles.WIDE4}>
                        <View style={styles.cancelround}>
                            <Image
                                style={{ width: 17,
                                  height: 17,
                                  marginLeft : 15,
                                  marginTop : 15
                                }
                                }
                                source={require('../../assets/image/btn_more.png')}/>
                        </View>
                    </View>
                </View>

            </View>
        </ImageBackground>

        <View style={styles.Down}>
            <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
                <DrawerItem
                    label="메뉴 닫기"
                    onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}/>
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
    flex: 1  ,
    justifyContent: 'center',
    marginLeft : 30
  },
  Down:{
    flex: 2.5  
  },
  
  WIDE1:{
    flexDirection: 'row',
    //alignitems: 'flex-start',
    marginTop : 15,
  },
  WIDE2:{
    flexDirection: 'row',
    //alignitems: 'flex-start',
    marginTop : 35,
  },
  WIDE3:{
    flexDirection: 'row',
    //alignitems: 'flex-start',
    marginTop : 35,
  },
  WIDE4:{
    flexDirection: 'row',
    marginLeft :235,
    marginTop : -40
  },
  H_L_IMG :{
    marginTop : 30,
    width: 12.2,
    height: 12.2,
  },
  S_O_IMG:{
    marginTop :10 ,
    width: 12.2,
    height: 12.2,
  },
  modify_IMG:{
    marginTop :17,
    width: 12.2,
    height: 12.2,
  },
  round:{
    width: 82,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#002254",
    flexDirection: 'row',

  },
  cancelround :{
    width: 50,
    height: 50,
    backgroundColor: "#367fff",
    borderRadius: 100,
    marginTop : 10
  },
  backgroundImage :{
    flex: 1,
  },
  H_L :{

    //fontFamily: "NotoSansKR",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -0.7,
    textAlign: "left",
    color: "#ffffff",
    marginTop : 26,
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
    ,marginTop : 10
    , marginLeft : 10
  },
  S_O:{
   // fontFamily: "NotoSansKR",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -0.7,
    textAlign: "left",
    color: "#ffffff"
    ,marginTop : 8
    ,marginLeft : 5
  }
})