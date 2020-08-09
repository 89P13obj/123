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
            {item.timeSpan}
          </Text>
        </View>
      </Left>
      <Right >
        <View>
          <Text style={{color : item.isBusy == 'busy' ? 'red' : 'green'}}>
            {item.isBusy}
          </Text>
        </View>
      </Right>
    </ListItem>
  );

  keyExtractor = (item) => item.id;

  render() {const data = [
    {id:0, timeSpan : '10:00-11:00', isBusy : 'busy'},
    {id:0, timeSpan : '11:00-12:00', isBusy : 'busy'},
    {id:0, timeSpan : '12:00-13:00', isBusy : 'busy'},
    {id:0, timeSpan : '13:00-14:00', isBusy : 'free'},
    {id:0, timeSpan : '14:00-15:00', isBusy : 'busy'},
    {id:0, timeSpan : '15:00-16:00', isBusy : 'busy'},
    {id:0, timeSpan : '16:00-17:00', isBusy : 'free'},
    {id:0, timeSpan : '17:00-18:00', isBusy : 'busy'},
    {id:0, timeSpan : '18:00-19:00', isBusy : 'busy'},
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