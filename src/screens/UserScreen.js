import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import ava from "../images/ava.jpg";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import { Thumbnail, DeckSwiper, Card, CardItem, Button } from "native-base";
import ScheduleScreen from "./ScheduleScreen";

const cards = [
  {
    image: require("../images/img1.jpg"),
  },
  {
    image: require("../images/img2.jpg"),
  },
];

class UserScreen extends React.Component {  
  render() {  
    const { usersData } = this.props;
    const user = usersData[this.props.route.params.id];
    
    return (
      <View key={user.id} style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.gallery}>
            <DeckSwiper
              dataSource={cards}
              renderItem={(item) => (
                <Image style={{ height: 240, flex: 1 }} source={item.image} />
              )}
            />
          </View>
          <View style={styles.ava}>
            <Thumbnail source={{ uri: ava }} />
            <View style={{ flexDirection: "column" }}>
              <Text>Имя : {user.name}</Text>
              <Text note>Профиль : {user.profile}</Text>
            </View>
          </View>
          <View style={styles.content}>
            <Text>Content</Text>
          </View>
        </ScrollView>
        
        
        <TouchableHighlight            
          style={styles.button} 
          onPress={() => this.props.navigation.navigate("Schedule")}
          underlayColor='#f2f3f3'
        >
          <Text style={styles.text}>Schedule</Text>
        </TouchableHighlight>
       
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  text: {
    textAlign: "center",
  },
  button: {
    backgroundColor: "purple",
    borderColor: "black",
    borderWidth:1,
    minHeight:40,
    flex:0.5,
    justifyContent: "center", 
  },
  scrollView: {
    backgroundColor: "#f2f3f3",
  },
  ava: {
    height: 80,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 2,
  },
  content: {
    height:400,
    flexDirection: "row",
  },
  gallery: {
    height: 240,
    backgroundColor: "#f2f3f3",
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
