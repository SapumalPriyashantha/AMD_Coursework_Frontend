import React from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Search from "./screens/Search";
import SignIn from "./screens/SignIn";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SaveVehical from "./screens/SaveVehical";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SaveVehical" component={SaveVehical} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
