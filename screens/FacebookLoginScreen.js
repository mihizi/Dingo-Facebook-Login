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

export default class FacebookLoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.whiteBox}>
          <Image style={styles.dingoCircle}
                 source={require('../img/dingo_circle.png')} />
          <Text style={styles.description}>Logging in with</Text>
          <Text style={styles.description}>Facebook lets</Text>
          <Text style={styles.description}>you easily add</Text>
          <Text style={styles.description}>friends to notify.</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('FacebookActualLogin')}>
            <Image style={styles.facebookButton}
                   source={require('../img/facebook_button.png')} />
          </TouchableOpacity>
        </View>
      </View>
          //<Image style={styles.facebookButton}
                 //source={require('./facebook_button.png')} />
    );
  }
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191979',
  },
  whiteBox: {
    flex: 1,
    margin: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    borderRadius: 30,
  },
  dingoCircle: {
    marginTop: 30,
    marginBottom: 25,
    width: 133,
    height: 133,
  },
  description: {
    //width: 233px,
    //height: 166px,
    //left: calc(50% - 233px/2),
    //top: calc(50% - 166px/2 + 77.5px),
    fontFamily: 'Avenir',
    fontSize: 22,
    alignItems: 'center',
    color: '#353535',
  },
  facebookButton: {
    marginTop: 25,
    width: 200,
    height: 31,
  },
});
