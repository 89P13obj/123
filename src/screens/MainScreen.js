import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { ListItem, Left, Body, Thumbnail, List, View, Right } from "native-base";
import ava from "../images/ava.jpg";
import AppHeader from "../components/AppHeader";

class MainScreen extends React.Component {
  renderItem = ({ item }) => (
    <ListItem
      key={item.id}
      roundAvatar
      className={"ListItem"} 
      onPress={() => this.props.navigation.navigate("User", { id: item.id })}    
    >
      <Left style={styles.listItemLeft}>
        <Thumbnail source={{ uri: ava }} />
      </Left>
      <Body style={styles.listItemBody}>
        <Text>{item.name}</Text>
        <Text note>{item.profile}</Text>
      </Body>
      <Right style={styles.listItemRight}>
        <Text note>
          123
        </Text>
      </Right>
    </ListItem>
    // </TouchableOpacity>
  );

  keyExtractor = (item) => item.id;

  render() {
    const { usersData, filteredData } = this.props;
    return (
      <View style={styles.container}>
        <AppHeader/>       
        <FlatList
        className="Flat"
          data={filteredData}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f3f3",
  },
  listItemLeft: {
    flex: 0.2,    
  },  
  listItemBody: {
    flex: 0.6,    
  },
  listItemRight: {
    flex: 0.2,    
  },
});

function mapStateToProps(state) {
  return {
    usersData: state.usersData,
    filteredData: state.filteredData,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
