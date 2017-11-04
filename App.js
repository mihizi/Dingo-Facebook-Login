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

 import FBSDK, { LoginManager } from 'react-native-fbsdk';

 //https://github.com/facebook/react-native-fbsdk
 const {
   LoginButton,
   AccessToken,
   GraphRequest,
   GraphRequestManager
 } = FBSDK;


//Object for each user
export class User extends Component {
//  constructor(fbookId, name, profPic) {
//    this.state = {
//      facebookId: fbookId;
//      name: name;
//      picture: profPic;
//    }
//  }

  render() {
    return <View> <Text>this.state.name</Text> </View>

  }
}

 export class Login extends Component {

     // Create response callback.
     _userFriendsResponseInfoCallback(error: ?Object, result: ?Object) {
       if (error) {
         alert('Error fetching data: ' + error.toString());
         console.log(Object.keys(error));// print all enumerable
         console.log(error.errorMessage); // print error message
       } else {
         alert('Success fetching data: ' + result.toString());
         console.log(Object.keys(result));
         meow_json = JSON.stringify(result); // result => JSON
         console.log(meow_json); // print JSON
//
//         let fbookId = JSON.stringify(result.id);
//         let pic = JSON.stringify(result.picture.data.url);
//         let name = JSON.stringify(result.name);
       }
     }

     _testUserFriends(accessToken) {
        const infoRequest = new GraphRequest(
          '/me',
          {
            parameters: {
              fields: {
                string: 'name,friends,picture' // what you want to get
              },
              access_token: {
                string: accessToken.toString() // put your accessToken here
              }
            }
          },
          this._userFriendsResponseInfoCallback // make sure you define _responseInfoCallback in same class
        );

        new GraphRequestManager().addRequest(infoRequest).start();
     }






     render() {
         return (
           <View>
             <LoginButton
//               publishPermissions={["publish_actions"]}
               readPermissions={["public_profile", "email", "user_friends"]}
               onLoginFinished={
                 (error, result) => {
                   if (error) {
                     alert("login has error: " + result.error);
                   } else if (result.isCancelled) {
                     alert("login is cancelled.");
                   } else {
                     AccessToken.getCurrentAccessToken().then(
                       (data) => {
                         alert(data.accessToken.toString());
                         this._testUserFriends(data.accessToken);
                       }
                     )
                   }
                 }
               }
               onLogoutFinished={() => alert("logout.")} />
           </View>
         );
     }

 }

 export default class App extends React.Component {


   render() {
     return (
       <View style={styles.container}>
        <Text>HAHA Whats up</Text>
        <Login />
        <View nativeID = "UserFriendsList">
        <Text>Friends Section Here: </Text>
        </View>
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
