import React from "react";
import { View, Text} from "react-native";
import { connect } from "react-redux";

function DialogScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>DialogScreen!</Text>
      </View>
    );
  }

  export default connect()(DialogScreen);