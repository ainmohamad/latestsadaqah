import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import req from '../screens/req.js';

const AppStackNavigator = createStackNavigator({
  req: req,
  
  })
  
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Request for donation',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
       <Text style={{fontSize:18, padding: 10}} onPress={() => this.props.navigation.navigate('req')}>Request for donation</Text>
        <Text style={{fontSize:18, padding:10}} onPress={() => this.props.navigation.navigate('donate')}>View request</Text>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
