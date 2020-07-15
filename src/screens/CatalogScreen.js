import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Item from "./Item";

class CatalogScreen extends React.Component {
  renderItem = ({ item }) => (
    <View key={item.id} style={{ alignItems: "center", margin: 10 }}>
      <Item
        name={item.name}
        count={item.count}
        price={item.price}
        navigation={this.props.navigation}
      />
    </View>
  );

  keyExtractor = (item) => item.id;

  render() {
    const { filteredData } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatlist}
          numColumns={2}
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
    filteredData: state.filteredData,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogScreen);
