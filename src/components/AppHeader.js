import React from "react";
import { StyleSheet, StatusBarIOS, StatusBar } from "react-native";
import { replace, reload } from "../store/actions/action";
import { connect } from "react-redux";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { Header, Text, Item, Input, View } from "native-base";
import filteredData from "../components/filteredData";

class AppHeader extends React.Component {
  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
    StatusBar.setBackgroundColor("#800080");

    const { onReplace, searchValue } = this.props;
    onReplace && onReplace(searchValue);
  }

  handleChange = textValue => {
    const { onReplace } = this.props;
    onReplace && onReplace(textValue);
  };

  render() {
    const {searchValue} = this.props;
    return (
      <View style={styles.container}>
        <Header  searchBar rounded  transparent style={styles.header}>
          <Item>
            <Fontisto name="search" size={24} color="black" />
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onReplace: (searchValue) => dispatch(replace(searchValue))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
