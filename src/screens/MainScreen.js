import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { ListItem, Left, Body, Thumbnail, List, View, Right, Button } from "native-base";
import ava from "../images/ava.jpg";
import AppHeader from "../components/AppHeader";
import { Fontisto } from "@expo/vector-icons";
import { favorites, markFavorites } from "../store/actions/action";
import filteredData from "../components/filteredData";

class MainScreen extends React.Component {
  handleChange = id => {
    const { onFavorite } = this.props;
    onFavorite && onFavorite(id);
  };

  renderItem = ({ item }) => (
    <ListItem
      key={item.id}
      roundAvatar       
    >
      <Left style={styles.listItemLeft}>
        <Thumbnail source={{ uri: ava }} />
      </Left>
      <Body style={styles.listItemBody}>
        <Text onPress={() => this.props.navigation.navigate("User", { id: item.id })} >{item.name}</Text>
        <Text note="true">{item.profile}</Text>
      </Body>
      <Right style={styles.listItemRight}>
        <Fontisto name="star" size={24} color ={(item.favorite == true) ? 'purple' : 'black'} onPress={() =>this.handleChange(item.id)}/>
      </Right>
    </ListItem>
  );

  keyExtractor = (item, index) => index.toString();

  render() {
    const { usersData,searchValue,onFiltered } = this.props;
    return (
      <View style={styles.container}>
        <AppHeader/>       
        <FlatList
          data={onFiltered(usersData,searchValue)}
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
    searchValue: state.searchValue,
    onFiltered: filteredData(state.usersData,state.searchValue)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFavorite: (id) => dispatch(markFavorites(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
