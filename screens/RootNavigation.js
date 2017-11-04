import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import AboutScreen from './AboutScreen';
import AddFriendsScreen from './AddFriendsScreen';
import AddLocationScreen from './AddLocationScreen';
import CompleteJourneyScreen from './CompleteJourneyScreen';
import CurrentLocationScreen from './CurrentLocationScreen';
import FacebookActualLoginScreen from './FacebookActualLoginScreen';
import FacebookLoginScreen from './FacebookLoginScreen';
import FeedbackDoneScreen from './FeedbackDoneScreen';
import FeedbackScreen from './FeedbackScreen';
import FriendsListScreen from './FriendsListScreen';
import HomeScreen from './HomeScreen';
import LoginCompleteScreen from './LoginCompleteScreen';
import LogOutConfirmScreen from './LogOutConfirmScreen';
import LogOutScreen from './LogOutScreen';
import NotificationsScreen from './NotificationsScreen';
import PermissionsAllowedScreen from './PermissionsAllowedScreen';
import PermissionsNotAllowedScreen from './PermissionsNotAllowedScreen';
import PermissionsScreen from './PermissionsScreen';
import ProgressScreen from './ProgressScreen';
import SidebarScreen from './SidebarScreen';
import WelcomeScreen from './WelcomeScreen';

const RootStackNavigator = StackNavigator({
    Home: { screen: HomeScreen },
    About: { screen: AboutScreen },
    AddFriends: { screen: AddFriendsScreen },
    AddLocation: { screen: AddLocationScreen },
    CompleteJourney: { screen: CompleteJourneyScreen },
    CurrentLocation: { screen: CurrentLocationScreen },
    FacebookActualLogin: { screen: FacebookActualLoginScreen },
    Feedback: { screen: FeedbackScreen },
    FeedbackDone: { screen: FeedbackDoneScreen },
    FriendsList: { screen: FriendsListScreen },
    Login: { screen: FacebookLoginScreen },
    LoginComplete: { screen: LoginCompleteScreen },
    LogOut: { screen: LogOutScreen },
    LogOutConfirm: { screen: LogOutConfirmScreen },
    Notifications: { screen: NotificationsScreen },
    Permissions: { screen: PermissionsScreen },
    PermissionsAllowed: { screen: PermissionsAllowedScreen },
    PermissionsNotAllowed: { screen: PermissionsNotAllowedScreen },
    Progress: { screen: ProgressScreen },
    Sidebar: { screen: SidebarScreen },
    Welcome: { screen: WelcomeScreen },
  });

export default class RootNavigator extends React.Component {

  render() {
    return <RootStackNavigator />;
  }
}
