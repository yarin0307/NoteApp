import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./Pages/HomePage";
import CategoryPage from "./Pages/CategoryPage";
import NotePage from "./Pages/NotePage";
import NoteApp from "./Comps/NoteApp";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NoteApp>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="My Notes">
          <Stack.Screen name="My Notes" component={HomePage} />
          <Stack.Screen name="Category Page" component={CategoryPage} />
          <Stack.Screen name="Note Page" component={NotePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </NoteApp>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});