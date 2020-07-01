import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
} from "react-native";
import { connect } from "react-redux";
import { ListItem, Left, Body, Thumbnail, List, Button } from "native-base";

class MainScreen extends React.Component {
  renderItem = ({ item }) => (
    <ListItem key={item.id} roundAvatar>
      {console.log(item)}
      <Left>
        <Thumbnail source={{ uri: "Image URL" }} />
        <Button
          onPress={() =>
            this.props.navigation.navigate("User", { id: item.id })
          }
        >
          <Text>13</Text>
        </Button>
      </Left>
      <Body>
        <Text>{item.name}</Text>
        <Text note>{item.profile}</Text>
      </Body>
    </ListItem>
  );

  keyExtractor = (item) => item.id;

  render() {
    const { usersData } = this.props;
    console.log(usersData);
    return (
      <List style={styles.container}>
        <FlatList
          style={styles.flatlist}
          data={usersData}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </List>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
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
    usersData: state.usersData,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
