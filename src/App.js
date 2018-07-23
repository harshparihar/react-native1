import React from 'react';
import Expo from "expo";
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Footer } from 'native-base';

import { Router, Scene } from 'react-native-router-flux';

import Welcome from './components/welcome.js';
import CampaignList from './components/campaignlist.js';
import CampaignInfo from './components/campaigninfo.js';
import LoginForm from './components/LoginForm';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    return (
      <Router hideNavBar= "true">
        <Scene key="root">
          <Scene key="Welcome" component={Welcome} title="Welcome" initial={true} />
          <Scene key="CampaignList" component={CampaignList} title="CampaignList" />
          <Scene key="CampaignInfo" component={CampaignInfo} title="CampaignInfo" />
          <Scene key="LoginForm" component={LoginForm} title="LoginForm" />
        </Scene>
      </Router>
    );
  }
}

