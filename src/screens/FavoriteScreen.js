import React from "react";
import { View, Text} from "react-native";
import { connect } from "react-redux";

function FavoriteScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>FavoriteScreen!</Text>
      </View>
    );
  }

  export default connect()(FavoriteScreen);