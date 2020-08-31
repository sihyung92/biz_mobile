import React from 'react';
import { StyleSheet, View, Text, Button, AsyncStorage, Image ,ImageBackground  } from 'react-native';
import axios from 'axios';

export default class MainScreen extends React.Component {
  static navigationOptions = {
      title: 'Main',
      header : null
  }

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
    axios.get('https://www.reddit.com/.json?sort=new&limit=30')
    .then(response => this.setState({MenuList: response.data.data.children}))
  }
  
  _retrieveData = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      if (value !== null) {
        // We have data!!
        console.log(userId);
        alert(userId);
        return userId;
      }
    } catch (error) {
      // Error retrieving data
    }
  };

_logOut = async () => {
  try {
    await AsyncStorage.removeItem(
      'userToken'
    );
  } catch (error) {
    // Error saving data
  }
};

menuMove(){
 
};

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/image/main_bg@3x.png')}  style={styles.backgroundImage}>
        <View style={styles.Innercontainer}>
          
        <View  style={styles.Middle}>
          <Image
              style={styles.MAN_IMG} 
              source={require('../assets/image/img_user@3x.png')}/>
          <Text
              style={styles.CORP_NM}
          >(주) 한국비즈넷</Text>
        </View>  
        

        <View style={styles.Down}>
          
              {this.state.MenuList.map((value) => 
              <Text
                style={styles.MenuBtn}
                key={value.data.id}
                onClick ={()=>this.menuMove() }>
                
                {value.data.id}
                
              </Text>)}
          
        </View>
        </View>   
       </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
     flex: 1, alignItems: 'center', justifyContent: 'center'
      ,flexDirection: 'column'
      
     
  },
  backgroundImage :{
    flex: 1,
    resizeMode: 'corver', // or 'stretch'
    width: "100%",
    height : "100%"
  },
  Innercontainer:{
    paddingTop : '5%'
  },

  Middle:{
    flex: 2,
    alignItems:"center"
    ,justifyContent:"center",
    marginTop : '10'
  },
  MAN_IMG :{
    width: 60,
    height: 60
  },
  CORP_NM:{
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 36,
    letterSpacing: -1.2,
    textAlign: "left",
    color: "#ffffff" 
  },

  Down:{
    flex: 3,
    alignItems:"center"
    ,justifyContent:"center"
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

  }
})