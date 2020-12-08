import React from "react";

import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Event(props) {
  let propsItem = props;

  const navigation = useNavigation();

  let image;
  if (props.item.strDrinkThumb) {
    image = { uri: props.item.strDrinkThumb };
  } else {
    image = {
      uri:
        "http://kasperstromman.com/wp-content/uploads/2017/05/HelsinkiIlme.jpg",
    };
  }

  let title = props.item.strDrink

  return (
    <View style={styles.DrinksContainer}>
      <View style={{ marginRight: 10, alignItem: "center" }}>
        <TouchableHighlight
          onPress={() => navigation.navigate("Recipepage", { propsItem })}
        >
          <Image
            progressiveRenderingEnabled={true}
            style={{ width: 55, height: 55 }}
            source={image}
          />
        </TouchableHighlight>
      </View>
      <View>
        <Text
          onPress={() => navigation.navigate("Recipepage", { propsItem })}
          style={{ fontWeight: "bold", maxWidth: 250 }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  DrinksContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "row",
    borderWidth: 1,
    padding: 5,
    alignItems: "center",
  },
});