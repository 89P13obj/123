import React from "react";
import { StyleSheet, StatusBarIOS, StatusBar } from "react-native";
import { replace, reload } from "../store/actions/action";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { Header, Text, Item, Input, View } from "native-base";

class AppHeader extends React.Component {
  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
    StatusBar.setBackgroundColor("#800080");

    const { onReplace,usersData, searchValue } = this.props;
    onReplace && onReplace(usersData,searchValue);

  }

  handleChange = textValue => {
    const { onReplace,usersData } = this.props;
    onReplace && onReplace(usersData,textValue);
  };

  render() {
    return (
      <View style={styles.container}>
        <Header searchBar rounded  transparent style={styles.header}>
          <Item>
            <Ionicons name="ios-search" size={30} color="black" />
            <Input
              placeholder="Search"
              name="search"
              onChangeText={this.handleChange}
              
            />
          </Item>
        </Header>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: 'purple'
  },
  header: { 
    justifyContent: "center",
  },
});

function mapStateToProps(state) {
  return {
    searchValue: state.searchValue,
    usersData: state.usersData,
    filteredData: state.filteredData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onReplace: (usersData,searchValue) => dispatch(reload(usersData,searchValue))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
