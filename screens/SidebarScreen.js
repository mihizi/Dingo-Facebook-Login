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

export default class SidebarScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sidebar}>
          <Button
            onPress={() => this.props.navigation.navigate('Notifications')}
            style={styles.but}
            title='Notifications'
          />
          <Button
            onPress={() => this.props.navigation.navigate('FriendsList')}
            style={styles.but}
            title='Friends List'
          />
          <Button
            onPress={() => this.props.navigation.navigate('CurrentLocation')}
            style={styles.but}
            title='Current Loc'
          />
          <Button
            onPress={() => this.props.navigation.navigate('About')}
            style={styles.but}
            title='About'
          />
          <Button
            onPress={() => this.props.navigation.navigate('Feedback')}
            style={styles.but}
            title='Feedback'
          />
          <Button
            onPress={() => this.props.navigation.navigate('LogOutConfirm')}
            style={styles.but}
            title='Log Out'
          />
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
  sidebar: {
    padding: window.height / 12,
    paddingTop: window.height / 4,
  },
});
