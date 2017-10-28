import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import AboutScreen from './AboutScreen';
import AddFriendsScreen from './AddFriendsScreen';
import AddLocationScreen from './AddLocationScreen';
import CompleteJourneyScreen from './CompleteJourneyScreen';
import CurrentLocationScreen from './CurrentLocationScreen';
import FacebookLoginScreen from './FacebookLoginScreen';
import FeedbackDoneScreen from './FeedbackDoneScreen';
import FeedbackScreen from './FeedbackScreen';
import FriendsListScreen from './FriendsListScreen';
import HomeScreen from './HomeScreen';
import LogOutConfirmScreen from './LogOutConfirmScreen';
import LogOutScreen from './LogOutScreen';
import NotificationsScreen from './NotificationsScreen';
import PermissionsAllowedScreen from './PermissionsAllowedScreen';
import PermissionsNotAllowedScreen from './PermissionsNotAllowedScreen';
import PermissionsScreen from './PermissionsScreen';
import ProgressScreen from './ProgressScreen';
import SidebarScreen from './SidebarScreen';
import WelcomeScreen from './WelcomeScreen';

const SidebarNavigation = DrawerNavigator(
  { Notifications: { screen: NotificationsScreen },
    Friends: { screen: FriendsListScreen },
    CurrentLocation: { screen: CurrentLocationScreen },
    ContactUs: { screen: FeedbackScreen },
    About: { screen: AboutScreen },
    LogOut: { screen: LogOutScreen },
  }, {
     contentComponent: DrawerMenu,
     contentOptions: {
       activeTintColor: '#e91e63',
       style: {
         flex: 1,
         paddingTop: 15,
       }
     }
   }
);

export default class SidebarNavigation extends React.Component {
  render() {
    return <SidebarNavigation />;
  }
}
