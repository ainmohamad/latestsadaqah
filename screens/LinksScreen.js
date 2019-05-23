import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import dform from '../screens/dform.js';

const AppStackNavigator = createStackNavigator({
dform: dform,

})

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Donate for others',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
       <Text style={{fontSize:18, padding: 10}} onPress={() => this.props.navigation.navigate('dform')}>Make donation</Text>
        <Text style={{fontSize:18, padding:10}} onPress={() => this.props.navigation.navigate('dform')}>View donation</Text>
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