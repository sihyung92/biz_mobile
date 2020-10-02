import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
  Dimensions,
  Modal
} from 'react-native';

const Loader = (props) => {
  const {
    loading,
    ...attributes
  } = props;
  
  return (
    <View
      transparent={true}
      animationType={'none'}
      style={styles.loaderContainer}>
      <View style={styles.background}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={true}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loaderContainer:{
    position: 'absolute',
    left:0,
    right:0,
    top:0,
    bottom:0,
    justifyContent: "center",
    alignItems: "center",
    zIndex:1100 
  },
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#rgba(0, 0, 0, 0.5)',
    zIndex: 1000
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default Loader