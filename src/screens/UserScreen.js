import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

class UserScreen extends React.Component {
  render() {
    const {usersData} = this.props;
    console.log(usersData);
    const user = usersData[this.props.route.params.id];
    console.log(user);
    return (
       <View  key={user.id} style={styles.container} >
         <Text>Имя : {user.name}</Text>
         <Text>Профиль : {user.profile}</Text>
       </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "blue"
  },
  flatList: {
    width: "100%",
    height: "100%",
  },
  viewRow: {
    flexDirection: "row",
  },
  image: {
    width: "50%",
    resizeMode: "cover",
  },
});


function mapStateToProps(state) {
  return {
    searchValue: state.searchValue,
    usersData: state.usersData,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);
