import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Dimensions,
  Button
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.homeText}>Tap the dingo</Text>
        <Text style={styles.homeText}>to go home.</Text>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Progress')}>
          <Image style = {styles.homePhoto}
                 source={require('../img/dingo_circle.png')} />
        </TouchableHighlight>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Sidebar')}>
        <Image style = {styles.menuPhoto}
               source={require('../img/menu.png')} />
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
    padding: window.height / 12,
    paddingTop: window.height / 10,
    alignItems: 'center',
  },
  homeText: {
    alignItems: 'center',
    fontSize: 30,
    fontFamily: 'Avenir',
    color: '#fff',
  },
  homePhoto: {
    marginTop: window.height / 12,
    marginBottom: window.height / 12,
    width: window.width / 2,
    height: window.width / 2,
  },
  menuPhoto: {
    width: window.width / 10,
    height: window.width / 10,
    margin: window.width / 14,
    tintColor: '#fff',
  },
});
