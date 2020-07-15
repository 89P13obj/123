import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

function ProfileScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ProfileScreen!</Text>
      </View>
    );
  }

  export default connect()(ProfileScreen);