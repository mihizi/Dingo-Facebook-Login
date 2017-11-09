
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
   Avatar,
 } from 'react-native';

 import FBSDK, { LoginManager } from 'react-native-fbsdk';
 import { ListItem } from 'react-native-elements';
 import CheckBox from 'react-native-modest-checkbox';
 import User from './User.js';

 //https://github.com/facebook/react-native-fbsdk
 const {
   LoginButton,
   AccessToken,
   GraphRequest,
   GraphRequestManager
 } = FBSDK;



 export class Login extends Component {
   constructor(props) {
     super(props);
     console.log("Props are: " + this.props);
   }
     // Create response callback.
     _userFriendsResponseInfoCallback = (error: ?Object, result: ?Object) => {
       if (error) {
         alert('Error fetching data: ' + error.toString());
         console.log(Object.keys(error));// print all enumerable
         console.log(error.errorMessage); // print error message
       } else {
         console.log(Object.keys(result));
         meow_json = JSON.stringify(result); // result => JSON
         console.log(meow_json); // print JSON

         user_friends = []

         let myId = JSON.stringify(result.id);
         let myPicture = JSON.stringify(result.picture.data.url);

         let fbookFriendData = result.friends.data;


         for (var poop = 0; poop < 4; poop++) {
           for (var i = 0; i < fbookFriendData.length; i++) {
             let friendId = fbookFriendData[i].id;
             let friendName = fbookFriendData[i].name;
             let friendPic = 'https://graph.facebook.com/' + friendId + '/picture?type=small';
             user_friends = [...user_friends, new User(friendId, friendName, friendPic)];
            //  console.log('friendId is: ' + friendId);
            //  console.log('friendName is: ' + friendName);
            //  console.log('friendPic is: ' + friendPic);
           }
         }

         user_friends.sort(function(a, b) {
           return (a.state.name < b.state.name) ? -1 : (a.state.name > b.state.name) ? 1 : 0;
         });

         for (var i = 0; i < user_friends.length; i++) {
           console.log(user_friends[i].state.name);
         }


        this.props.callbackFromParent(user_friends);



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

                         //Go to Login Complete Screen

                         //Determine if this was their first login onto the app
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
   constructor(props) {
    super(props);
    this.state = {
      data: [],
      pack: {}
    };
  }

  //Callback to get all the user nodes from the login class to the Welcome Screen's Class
  //Set State for all user friends, and initialize dictionary that stores which friends have been selected to be in pack
  myCallback = (dataFromChild) => {
    this.setState({ data: dataFromChild });
    for (var i = 0; i < this.state.data.length; i++) {
      this.state.pack[this.state.data[i].state.facebookId] = false;
    }
  }

  //Keep track of which friends are selected to be in the pack
  selectOrUnselectFriendForPack(markedId) {
    this.state.pack[markedId] = !this.state.pack[markedId]
  }

  //Save the chosen friends
  savePack() {
    pack = [];

    for (var key in this.state.pack) {
    // check if the property/key is defined in the object itself, not in parent
      if (this.state.pack.hasOwnProperty(key) && this.state.pack[key]) {           
        pack = [...pack, key];
      }
    }

    //SEND LIST OF FRIENDS IN PACK TO DATABASE
    console.warn(pack);
  }



   render() {
    return (
      <View style={styles.container}>
          <View>
             <Login callbackFromParent={this.myCallback.bind(this)} />
          </View>
          <View style={styles.ScreenTitleContainer}>
            <Text style={styles.ScreenTitle}>Who's In Your Pack?</Text>
          </View>
          <View style={styles.userList}>
            <FlatList
              // containerStyle={{borderBottomWidth: 10}}
              data={this.state.data}
              renderItem={({ item }) => (
                <ListItem
                  // style={{height: 0}}
                  roundAvatar
                  title={item.state.name}
                  titleStyle={{color: '#ffffff'}}
                  avatar={{ uri: item.state.picture}}
                  // rightIcon={{ name: 'check-square', type: 'font-awesome', style: { marginRight: 10, fontSize: 15 }}}
                  rightIcon = {<CheckBox
                                labelBefore={true}
                                label=''
                                onChange={(checked) => this.selectOrUnselectFriendForPack(item.state.facebookId)}
                                checkboxStyle={{width: 30, height: 30, tintColor: '#ffffff' }}
                              />}
                />
              )}
              keyExtractor={item => item.state.facebookId}
            />
          </View>
              <TouchableOpacity style={styles.continueButton} onPress={() => this.savePack()}>
                <View style={styles.loginButton}>
                  <Text style={styles.loginText}>JOIN THE PACK</Text>
                </View>
              </TouchableOpacity>
       </View>
     );
   }
 
 }

 const window = Dimensions.get('window');

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#191979',
   },
   statusBarUnderlay: {
     height: 24,
     backgroundColor: 'rgba(0,0,0,0.2)',
   },
   userList: {
     position: 'absolute',
     margin: window.width/8,
     marginTop: window.height/ 7,
     width: window.width - 100,
     // height: window.height - 60,
     height: window.height/ 8 * 5,
     // borderWidth: 0.5,
     // borderColor: '#ffffff',
   },
   whiteBox: {
     flex: 1,
     margin: 20,
     backgroundColor: '#ffffff',
     alignItems: 'center',
     borderRadius: 30,
   },
   dingoCircle: {
     marginTop: window.height/6,
     marginBottom: window.height/15,
     width: window.width/3,
     height: window.width/3,
   },
   ScreenTitleContainer: {
     alignItems: 'center',
   },
   ScreenTitle: {
    // position: 'absolute',
    fontSize: 30,
    fontFamily: 'Avenir',
    color: '#fff',
   },
  loginButton: {
    margin: 20,
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    width: window.width / 2,
    alignItems: 'center',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowColor: '#000000',
  },
  loginText: {
    color: '#171797',
  }, 
  // continueButtonContainer: {
  //   alignItems: 'center',
  //   bottom: window.length/4,
  // },
  continueButton: {
    position: 'absolute',
    left: window.width/4- .8* window.width/16,
    bottom: 20,
  },

 });
