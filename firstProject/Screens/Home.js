import { StatusBar } from "expo-status-bar";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  ImageBackground,
} from "react-native";

import { useState, useCallback } from "react";
import axios from "axios";
export default function App(props) {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  console.log(data);

  const API_KEY = "f0dd7cc0928f21dde5d1acd8ee19f6ed";

  const fetchData = useCallback(() => {
    axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        setData(response.data);
      });
  }, [API_KEY, input]);

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/Gradient Blue.jpeg")}
    >
      <StatusBar style="dark"/>
      <SafeAreaView style={styles.cover}>
        <TextInput
          style={styles.input}
          placeholder="Enter your location."
          placeholderTextColor={"#212F3C"}
          onChangeText={(text) => setInput(text)}
          onSubmitEditing={fetchData}
        />

       
          {data.length !== 0 && 
            (
              <View>
                <Text>{data.name}</Text>
                <Text>{data.main.temp}</Text>
                <Text>{data.weather.main}</Text>
              </View>
            )          
          }
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
    padding: 20,
  },
  cover: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    width: `100%`,
    height: 960,
  },
  input: {
    width: 280,
    paddingHorizontal: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
});
