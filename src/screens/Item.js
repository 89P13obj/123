import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { connect } from "react-redux";

class Item extends React.PureComponent {
  render() {
    return (
      <TouchableHighlight
        key={this.props.id}
        onPress={() =>
          this.props.navigation.navigate("Item", {
            itemId: this.props.id,
            name: this.props.name,
            count: this.props.count,
            price: this.props.price,
          })
        }
      >
        <View style={styles.container}>
          <Text style={styles.foto}>Foto</Text>
          <Text>{this.props.name}</Text>
          <Text>count : {this.props.count}</Text>
          <Text>price : {this.props.price}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  foto: {
    width: 150,
    height: 150,
    textAlign: "center",
    backgroundColor: "yellow",
  },
});
function mapStateToProps(state) {
  return {
    searchValue: state.searchValue,
    tableHead: state.tableHead,
    tableData: state.tableData,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
