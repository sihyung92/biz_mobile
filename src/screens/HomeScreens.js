import React from 'react';
import { StyleSheet, View, Text, Button, AsyncStorage, Image ,ImageBackground, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import MenuBtn from '../components/MenuBtn.js';
import menuNavigationData from '../navigation/menuNavigationData';
import axios from 'axios';

export default class HomeScreens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MenuList: [],
      corpId: 418,
      email: "abc@kobiznet.com",
      password: "",
      roles: "A",
      userId: "",
      userName: "admin"
    }
  }

  // 갖고올 주소 
  componentDidMount(){
    const mockMenus = ["SKD 조회/견적요청","Booking 의뢰","BL 상태조회","청구확인"]; 
    this.setState({MenuList: mockMenus});
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

  menuMove(props){
   this.props.navigation.navigate('SignIn');
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/image/main_bg.png')}  style={styles.backgroundImage}>
          <View style={styles.Innercontainer}>
            <MenuBtn {...this.props}/>
            <View style={styles.Middle}>
              <Image
                  style={styles.MAN_IMG} 
                  source={require('../../assets/image/img_user.png')}/>
              <Text
                  style={styles.CORP_NM}
              >(주) 한국비즈넷</Text>
            </View>  
            <View style={styles.Down}>  
              {
              this.props.menuList.map((item, idx)  =>
              <Text
                style={styles.MenuBtn}
                key={`stack_item-${idx + 1}`}
                //onPress={() => this.props.navigation.navigate(item.name)}
                >
                {item.MENU_NM}
              </Text>
              )
              } 
              <Text
                style={styles.MenuBtn}
                onPress={() => this.props.navigation.navigate("MyPage")}>
                "마이마이"
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
     );
    }
  }

const styles = StyleSheet.create({
  container : {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     flexDirection: 'row', 
  },
  backgroundImage :{
    width: "100%",
    height : "100%"
  },
  Innercontainer:{
    flex: 1,
    paddingTop : '5%',
  },
  Middle:{
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
    marginTop : 10,
  },
  MAN_IMG :{
    width: 60,
    height: 60,
  },
  CORP_NM:{
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 36,
    letterSpacing: -1.2,
    textAlign: "left",
    color: "#ffffff", 
  },

  Down:{
    flex: 3,
    flexDirection: 'column', 
    alignItems:"center",
    justifyContent:"center",
  },

  MenuBtn:{
    fontSize: 18,
    lineHeight: 27,
    letterSpacing: -0.9,
    
    color: "#ffffff",
    width: 312,
    height: 51,
    borderRadius: 5,
    backgroundColor: "#2467b8",
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    textAlign :"center",
    textAlignVertical :"center",
    lineHeight :51,
    marginBottom : 20

  },
})