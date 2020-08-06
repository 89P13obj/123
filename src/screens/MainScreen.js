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
import { favorites } from "../store/actions/action";

class MainScreen extends React.Component {
  handleChange = id => {
    const { onFavorite,usersData } = this.props;
    onFavorite && onFavorite(usersData,id);
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
        <Text note>{item.profile}</Text>
      </Body>
      <Right style={styles.listItemRight}>
        <Fontisto name="star" size={24} color ={(item.favorite == true) ? 'purple' : 'black'} onPress={() =>this.handleChange(item.id)}/>
      </Right>
    </ListItem>
  );

  keyExtractor = (item) => item.id;

  render() {
    const { filteredData } = this.props;
    return (
      <View style={styles.container}>
        <AppHeader/>       
        <FlatList
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
  return {
    onFavorite: (usersData,id) => dispatch(favorites(usersData,id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
