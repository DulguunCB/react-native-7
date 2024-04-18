import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, Button, View } from "react-native";

export default function App(props) {
    console.log(props)
  return (
    
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Settings</Text>
      <Button title="Go to profile" onPress={()=> props.navigation.navigate('Profile')}/>
    </View>
  );
}
