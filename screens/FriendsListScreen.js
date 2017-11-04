import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Button
} from 'react-native';


export default class FriendsListScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonAndHeader}>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
              <Image style = {styles.backButton}
                     source={require('../img/back.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.header}>
            <Text style={styles.friendsHeader}>Dingos</Text>
          </View>
        </View>
        <View style={styles.friends}>
        </View>
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
  friendsHeader: {
    alignItems: 'center',
    fontSize: 30,
    fontFamily: 'Avenir',
    color: '#fff',
  },
  backButton: {
    width: 24,
    height: 24,
    margin: 10,
    marginRight: 20,
  },
  buttonAndHeader: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
});
