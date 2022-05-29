import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import Country from "./Country";
import { ScrollView } from "react-native";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <View>
      <Text style={styles.header}>Countries: {countries.length}</Text>
      <ScrollView>
        {countries.map((country, index) => (
          <Country country={country} key={index}></Country>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    marginBottom: 30,
    color: "#000",
    fontWeight: "bold",
    fontSize: 24,
  },
});
