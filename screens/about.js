import React from 'react';
import { ScrollView, StyleSheet, Image, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body } from 'native-base';

export default class about extends React.Component {
  static navigationOptions = {
    title: 'What is E-Sadaqah? ',
  };

  render() {
    return (
        <Container>
        <Content>
          <Card style={{flex: 0}}>
            
            <CardItem>
              <Body>
                <Image source={{uri: 'https://englishplacementblog.files.wordpress.com/2016/04/9926493986_c798f12d9f_b.jpg'}} style={{height: 200, width: 312, flex: 1}}/>
                <Text>
                  This application provides an easy way for student and donors in IIUM to donate and receive the donation. 
                  </Text>
                  <Text>
                   Both donor and receiver need to register themselves first before using the service.
                   Also, there is a need to explain in details about the item in need/ to be given.

                   


                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                  <Icon name="clock" />
                  <Text>Operation hour: 24/7</Text>
              </Left>
            </CardItem>
           
          </Card>
        </Content>
      </Container>
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
