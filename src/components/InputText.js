import React from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, Image } from 'react-native';

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
}

export default function(props){
    return <View style={styles.PasswordInputView} >
            <Image
            style={{flex:1, flexDirection:'row'}} 
            source={require('../../assets/image/ic_pw.png')}/>
            <TextInput  
              secureTextEntry
              style={styles.inputPassword}
              placeholder="Password..." 
              onChangeText={text => this.setState({password:text})}/>
          </View>
}