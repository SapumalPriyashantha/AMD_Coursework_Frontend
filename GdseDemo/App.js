import React from "react";
import { View,Text,StyleSheet } from "react-native";
import Header from "./Header";
import Sapumal from "./Sapumal";
import Cat from "./Cat";
import Cow from "./Cow";

function App(){
  return(
    <View>
      <Text style={style.title}>hello Ijse</Text>
      <Header/>
      <Sapumal />
      <Cat />
      <Cow />
    </View>
  );
}

const style = StyleSheet.create({
  title: {
   color:'#000200',
  }
});
export default App;
