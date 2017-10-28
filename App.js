/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   Image,
   Platform,
   ScrollView,
   StyleSheet,
   Text,
   TouchableOpacity,
   Dimensions,
   View
 } from 'react-native';
 import RootNavigation from './screens/RootNavigation';

 export default class App extends React.Component {

   render() {
     return (
       <View style={styles.container}>
         {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
         {Platform.OS === 'android' &&
           <View style={styles.statusBarUnderlay} />}
         <RootNavigation />
       </View>
     );
   }
 }

 const window = Dimensions.get('window');

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
   },
   statusBarUnderlay: {
     height: 24,
     backgroundColor: 'rgba(0,0,0,0.2)',
   },
 });
