import React from 'react';
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
//import { SearchBar } from 'react-native-searchbar';

export default class AddFriendsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>Add Dingos</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('AddLocation')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Next</Text>
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
    alignItems: 'center',
    padding: 30,
  },
  text: {
    fontSize: 30,
    color: '#fff',
  },
  button: {
    margin: 20,
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    width: window.width / 2,
    alignItems: 'center',
  },
  buttonText: {
    color: '#171797',
    fontSize: 16
  },
});
