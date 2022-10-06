import React from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity } from "react-native";


function App(){
  return (
    <View >
      
      <View style={styles.subContainer}>
        <TouchableOpacity
        style={styles.button}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
      >
        <Text>Sign In</Text>
      </TouchableOpacity>
      </View>
      <Image
        style={styles.input1}
        source={require('../GdseDemo/screens/img/vehicalSell.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer:{
    flex: 3,
    flexDirection:"row",
    justifyContent:"flex-end",
    marginLeft:10,
    marginTop:10
  },
  input1:{
    marginTop:'60%',
    width:'100%',
    height:'60%',
  },
  button:{
    backgroundColor: "#DDDDDD",
    marginRight:20,
    width:65,
    height:30,
  }
});
export default App;
