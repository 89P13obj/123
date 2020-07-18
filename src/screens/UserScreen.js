import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
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
        
        <View style={{height:40, flexDirection:"row"}}>
        <Button rounded style={{flex:1, marginBottom:100, justifyContent:"center", backgroundColor:"red"}}    onPress={() => this.props.navigation.navigate("Schedule")}    
>
          <Text>Schedule</Text>
        </Button>
        </View>
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
  scrollView: {
    backgroundColor: "#DCDCDC",
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
    backgroundColor: "#DCDCDC",
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
