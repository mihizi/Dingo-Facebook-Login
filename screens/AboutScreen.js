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

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Image style = {styles.backButton}
                 source={require('../img/back.png')} />
        </TouchableOpacity>
        <View style={styles.content}>
          <Image style = {styles.groupPhoto}
                 source={require('../img/murad.jpg')} />
          <Text style={styles.aboutText}>We are 7 kids in Berkeley</Text>
          <Text style={styles.aboutText}>trying to make life a</Text>
          <Text style={styles.aboutText}>little easier, one step</Text>
          <Text style={styles.aboutText}>at a time.</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Feedback')}>
            <View style={styles.feedbackButton}>
              <Text style={styles.feedbackText}>Send Feedback</Text>
            </View>
          </TouchableOpacity>
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
    padding: 30,
  },
  content: {
    alignItems: 'center',
  },
  aboutText: {
    alignItems: 'center',
    fontSize: 18,
    fontFamily: 'Avenir',
    color: '#fff',
  },
  groupPhoto: {
    marginTop: 40,
    marginBottom: 40,
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  backButton: {
    width: 24,
    height: 24,
  },
  feedbackButton: {
    margin: 20,
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    width: window.width / 2,
    alignItems: 'center',
  },
  feedbackText: {
    color: '#171797',
    fontSize: 16
  },
});
