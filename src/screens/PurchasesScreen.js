import React from "react";
import { View, Text} from "react-native";
import { connect } from "react-redux";

function PurchasesScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>PurchasesScreen!</Text>
      </View>
    );
  }

  export default connect()(PurchasesScreen);