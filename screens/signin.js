import React from 'react';
import { View, ScrollView,  StyleSheet, Text } from 'react-native';
import { Container, Header, Content, Form, Item, Picker, Label, Input, Textarea, Button } from 'native-base';

export default class signin extends React.Component {
  static navigationOptions = {
    title: 'Sign In',
  };
  constructor(props){
  super(props);
  this.state = {
      type: undefined,
};
  }
  onValueChange2(value: String) {
    this.setState({
      selected2: value
    });
  }

  render() {
    return (
      <View>
          <Form>

        <Item floatingLabel>
        <Label>Email</Label>
        <Input />
        </Item>

        <Item floatingLabel >
        <Label>Password</Label>
        <Input />
        </Item>

        </Form>

        <View style={styles.button} >
            <Button block light onPress={(()=>this.props.navigation.navigate('home'))}>
            <Text>Log In</Text>
            </Button>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  button: {
    padding: 80,
},
});