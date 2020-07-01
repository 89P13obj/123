import React from "react";
import { View, Text} from "react-native";
import { connect } from "react-redux";

function FeedbackScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>FeedbackScreen!</Text>
      </View>
    );
  }

  export default connect()(FeedbackScreen);