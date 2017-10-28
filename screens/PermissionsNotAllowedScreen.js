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

export default class PermissionsNotAllowedScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>Permisisons are</Text>
        <Text style={styles.mainText}>not allowed :(</Text>
        <Text style={styles.description}>Please allow location tracking or</Text>
        <Text style={styles.description}>push notifications to use the app.</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Permissions')}
          title='Allow permissions -->'
        />
        <Image style = {styles.dingo}
               source={require('./dingotransparent.png')} />
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
  mainText: {
    alignItems: 'center',
    fontSize: 30,
    fontFamily: 'Avenir',
    color: '#fff',
  },
  dingo: {
    marginTop: 40,
    width: 92,
    height: 137,
  },
});
