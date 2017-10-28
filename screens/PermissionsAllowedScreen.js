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

export default class PermissionsAllowedScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.homeText}>Permissions Allowed!</Text>
        <Image style = {styles.homePhoto}
               source={require('./dingotransparent.png')} />
        <Button
         onPress={() => this.props.navigation.navigate('AddFriend')}
         title='Add Friends -->'
        />
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
  homeText: {
    alignItems: 'center',
    fontSize: 30,
    fontFamily: 'Avenir',
    color: '#fff',
  },
  homePhoto: {
    marginTop: 40,
    width: 92,
    height: 137,
  },
});
