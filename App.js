import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
} from "react-native";

//library imports 
import { Container, Content, Header, Body } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//custom files 
//import AppStackNavigator from './AppStackNavigator'
import SettingsScreen from './SettingsScreen';
import HomeScreen from "./HomeScreen";
import LoadingScreen from "./screens/LoadingScreen";
import PortScreen from "./screens/PortScreen";
import SignUpScreen from "./screens/SignUpScreen";
import TryScreen from "./screens/Try";

const MyApp = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Loading: {
    screen: LoadingScreen
  },
  Settings: {
    screen: SettingsScreen
  },
  Port: {
    screen: PortScreen
  },
  SignUp: {
    screen: SignUpScreen
  },
  Try: {
    screen: TryScreen
  },
  initialRouteName: {
    screen: "Home"
  }
});


const AppContainer = createAppContainer(MyApp);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    ) 
  }
}


styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})