import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";

export default function App(props) {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Profile</Text>
      <Button title="Home" onPress={()=>props.navigation.navigate('Home')}/>
    </View>
  );
}
