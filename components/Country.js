import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";

export default function Country({ country }) {
  return (
    <View style={styles.card}>
      <Text style={styles.txtStyle}>Name: {country.name.common}</Text>
      <Image
        source={{
          uri: `${country.flags.png}`,
        }}
        style={{ width: 50, height: 35 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderTop: 1,
    borderColor: "tomato",
    padding: 8,
    width: "47%",
    margin: "1%",
  },
  txtStyle: {
    marginBottom: 10,
  },
});
