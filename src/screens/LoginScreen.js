import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { Content, Form, Item, Label, Input, Button } from "native-base";

function LoginScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Content>
        <Form>
          <Item fixedLabel>
            <Label>Username:</Label>
            <Input placeholder="*****" />
          </Item>
          <Item fixedLabel last>
            <Label>Password:</Label>
            <Input placeholder="*****" />
          </Item>
          <Button style={{ justifyContent: "center", margin: 10 }} 
                  onPress={() => navigation.navigate('Main',{navigation:navigation})}
          >
            <Text>Log in</Text>
          </Button>
          <Button style={{ justifyContent: "center", margin: 10 }}>
            <Text>Registration</Text>
          </Button>
        </Form>
      </Content>
    </View>
  );
}

export default connect()(LoginScreen);
