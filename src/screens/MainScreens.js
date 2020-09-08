import * as React from 'react';
import { StyleSheet, View, Text, Button, Image ,ImageBackground  } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator,  DrawerContentScrollView,  DrawerItemList,  DrawerItem } from '@react-navigation/drawer';
import HomeScreens from './HomeScreens';

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Open drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  );
}
//목록 리스트 여따가 밑에 하나씩 추가하면됨 
/*function Notifications() {
  return (
    <View>
      <Text>Notifications Screen</Text>
    </View>
  );
}
 //<Drawer.Screen name="Notifications" component={Notifications} />
*/
function CustomDrawerContent(props) {
  return (

    <View style={styles.sideBarOut}>
      <ImageBackground
          source={require('../../assets/image/toggle_bg.png')}  style={styles.backgroundImage}>
      <View style={styles.UP}>
            <View  style={styles.Vertical}>
                <View style={styles.WIDE1}>
                  <Image
                    style={styles.H_L_IMG} 
                    source={require('../../assets/image/home.png')}/>
                  <Text  style={styles.H_L}>HOME</Text>
                  <Text  style={styles.H_L}>  |  </Text>
                  <Image
                    style={styles.H_L_IMG} 
                    source={require('../../assets/image/logout.png')}/>
                  <Text  style={styles.H_L}>LOGOUT</Text>
                </View>
                <View style={styles.WIDE2}>
                <Image
                  style={{ width: 40,
                          height: 40}}
                  source={require('../../assets/image/img_muser.png')}/>
                <Text  style={styles.C}>
                  회사이름</Text>
                <Image 
                  style={styles.modify_IMG}
                  source={require('../../assets/image/edit_ico.png')}/>
                </View>

                <View style={styles.WIDE3}>
                <View style={styles.round}>
                  <Image
                    style={styles.S_O_IMG} 
                    source={require('../../assets/image/ic_speaker.png')}/>

                   <Text  style={styles.S_O}>
                        고객센터</Text>
                </View>
                <View style={styles.round}>
                <Image
                    style={styles.S_O_IMG} 
                    source={require('../../assets/image/ic_settings.png')}/>
                    <Text  style={styles.S_O}>
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
                            }}
                      source={require('../../assets/image/btn_more.png')}/>
                </View>
                </View>
            </View>  
               
        </View>
        </ImageBackground>

      <View style={styles.Down}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
        />
      </DrawerContentScrollView>
      </View>
    </View>
  );
}
////////////////////////////////////////////
const Drawer = createDrawerNavigator(
  
);

//사이드바 메뉴 항목 추가 .
function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="HomeScreens" component={HomeScreens} />
    </Drawer.Navigator> 
  );
}
/////////////////////
export default class MainScreens extends React.Component{
  static navigationOptions = {
      title: "main",
      headerShown: null,
  }
  render(){
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    )
  }

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