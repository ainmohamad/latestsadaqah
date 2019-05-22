import React from 'react';
import { View, ScrollView,  StyleSheet, Text } from 'react-native';
import { Container, Header, Content, Form, Item, Picker, Label, Input, Textarea, Button } from 'native-base';

export default class dform extends React.Component {
  /*static navigationOptions = {
    title: 'Donation form',
  };*/
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
          <Item Picker>
        <Label>Select donation type:</Label>
        <Picker
        selectedValue={this.state.type}
        onValueChange={this.onValueChange2.bind(this)}
        >
        <Picker.Item label="Clothes" value="cloth" />
        <Picker.Item label="Book" value="book" />
        <Picker.Item label="Education" value="education" />
        </Picker>
        </Item>

        <Item floatingLabel>
        <Label>Enter amount</Label>
        <Input />
        </Item>

        <Item floatingLabel>
        <Label>Details of the donation</Label>
        <Input />
        </Item>

        <Item floatingLabel >
        <Label>Contact details</Label>
        <Input />
        </Item>

        </Form>

        <View style={styles.button}>
            <Button block light>
            <Text>Submit donation</Text>
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