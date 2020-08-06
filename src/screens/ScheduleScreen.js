import React, {Component} from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";
import { connect } from "react-redux";
import CalendarPicker from 'react-native-calendar-picker';
import { Left, Right, ListItem } from "native-base";




class ScheduleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };    
  }
  
  renderItem = ({ item }) => (
    <ListItem key={item.id} style={{alignContent:"center"}}>
      <Left>
        <View>
          <Text>
            {item[0]}
          </Text>
        </View>
      </Left>
      <Right >
        <View>
          <Text style={{color : item[1]=='busy' ? 'red' : 'green'}}>
            {item[1]}
          </Text>
        </View>
      </Right>
    </ListItem>
  );

  keyExtractor = (item) => item.id;

  render() {const data = [
      ['10:00-11:00','busy'],
      ['11:00-12:00','busy'],
      ['12:00-13:00','busy'],
      ['13:00-14:00','free'],
      ['14:00-15:00','free'],
      ['15:00-16:00','busy'],
      ['16:00-17:00','busy'],
      ['17:00-18:00','busy'],
      ['18:00-19:00','busy'],
    ];
    return (
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}
        />
        <FlatList
          data={data}
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
    backgroundColor: '#FFFFFF',
  },
});
  

  export default connect()(ScheduleScreen);