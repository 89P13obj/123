import React from "react";
import { View, Text} from "react-native";
import { connect } from "react-redux";
import { Button } from "native-base";

function ScheduleScreen(props) {
    return (
      <View style={{  flex:1 }}>
        <Text>ScheduleScreen!</Text>
        <Button style={{flex:0.5}}    onPress={() => props.navigation.navigate("User")}    
>
          <Text>Back</Text>
        </Button>
      </View>       
    )}
  

  export default connect()(ScheduleScreen);