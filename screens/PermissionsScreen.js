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

export default class PermissionsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>To get/send instant</Text>
        <Text style={styles.description}>notifications when</Text>
        <Text style={styles.description}>you or your friends</Text>
        <Text style={styles.description}>get home, enable the</Text>
        <Text style={styles.description}>permissions below.</Text>
        <Button
         onPress={() => this.props.navigation.navigate('PermissionsAllowed')}
         title='Permissions Allowed -->'
        />
        <Button
         onPress={() => this.props.navigation.navigate('PermissionsNotAllowed')}
         title='Permissions Not Allowed -->'
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
  description: {
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
