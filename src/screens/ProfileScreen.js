import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { Thumbnail } from "native-base";
import ava from "../images/ava.jpg";

function ProfileScreen() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.avatar}>
            <Thumbnail source={{ uri: ava }} />
          </View>
          <View style={styles.gallery}>
            <Text>Gallery:</Text>
          </View>
          <View style={styles.statistic}>
            <Text>Weekly statistics:</Text>
            <View>
              <Text>Views : 17</Text>
              <Text>Recording : 4</Text>
            </View>
          </View>
          <View style={styles.information}>
            <Text>Basic information:</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "white",
    },
    avatar: {
      height: 80,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      borderBottomWidth: 1,
      borderTopWidth:1,
    },
    gallery: {
      height:200,
      flexDirection: "row",
      borderBottomWidth: 1,
    },
    information: {
      justifyContent: "center",
      alignItems: "center",
      height:40,
      flexDirection: "row",
    },
    statistic: {
      justifyContent: "center",
      alignItems: "center",
      height: 160,
      borderBottomWidth: 1,
      backgroundColor: "#f2f3f3",
    },
  });
  export default connect()(ProfileScreen);