import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { connect } from "react-redux";

function DialogScreen() {
    return (
      <View style={styles.container}>
        <Text>DialogScreen!</Text>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#f2f3f3",
      justifyContent: 'center', 
      alignItems: 'center' }
    },
  );
  export default connect()(DialogScreen);