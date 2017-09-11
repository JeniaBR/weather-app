import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TodayWeather from './app/components/TodayWeather';

export default class weatherApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TodayWeather/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#90CAF9',
  }
});

AppRegistry.registerComponent('weatherApp', () => weatherApp);
