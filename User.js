 import React, { Component } from 'react';
 import {
   Image,
   Platform,
   ScrollView,
   StyleSheet,
   Text,
   TouchableOpacity,
   Dimensions,
   View,
   FlatList,
   Avatar
 } from 'react-native';


 //Object for each user
 export default class User extends Component {
   constructor(fbookId, name, profPic) {
     super();
     this.state = {
       facebookId: fbookId,
       name: name,
       picture: profPic,
     }

   }

   render() {
     return (
       <View>
        <Avatar
          small
          rounded
          source={{uri: this.state.picture}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Text>this.state.name</Text>
       </View>
     );
   }
 }
