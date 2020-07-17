import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import MyStack from "./screens/MyStack";
import { StyleSheet } from "react-native";

function App () {
    return (
      <Provider store={store} style={styles.container}>
        <MyStack/>
      </Provider>
    );
  };

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});

export default App;
