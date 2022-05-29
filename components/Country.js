import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";

export default function Country({ country }) {
  return (
    <View>
      <Text>Name: {country.name.common}</Text>
      <Image
        source={{
          uri: `${country.flags.png}`,
        }}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
}
