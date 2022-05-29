import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import Country from "./Country";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [searched, setSearched] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setSearched(data);
        setCountries(data);
      });
  }, []);

  const handleSearch = (text) => {
    const filtered = countries.filter((country) =>
      country.name.common.includes(text)
    );
    setSearched(filtered);
  };
  return (
    <View>
      <Text style={styles.header}>Countries: {searched.length}</Text>
      <TextInput style={styles.input} onChangeText={handleSearch}></TextInput>
      <ScrollView>
        <View style={styles.parent}>
          {searched.map((country, index) => (
            <Country country={country} key={index}></Country>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    marginBottom: 15,
    color: "#000",
    fontWeight: "bold",
    fontSize: 24,
  },
  parent: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
