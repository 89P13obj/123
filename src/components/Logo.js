import React from "react";
import { StyleSheet, StatusBar, View, Text } from "react-native";

class Logo extends React.Component {
    componentDidMount() {
      StatusBar.setBarStyle("light-content", true);
      StatusBar.setBackgroundColor("#800080");
      // StatusBar.setHidden(true);
    }  
    render() {
    return (
        <View style={styles.text}>
            <Text style={styles.title1}>Furniture </Text>
            <Text style={styles.title2}>hub</Text>
        </View>
    );
  }};
  const styles = StyleSheet.create({
    text: {
      backgroundColor: "purple",
      flexDirection: "row",
      justifyContent: "center"
    },
    title1: {
      marginTop: 40,
      fontSize: 32,
      fontWeight: "bold",
      color: "white"
    },
    title2: {
      marginTop: 40,
      fontSize: 32,
      fontWeight: "bold",
      paddingLeft: 10,
      paddingRight: 10,
      color: "black",
      backgroundColor: "orange"
    }
  });

  export default (Logo);
