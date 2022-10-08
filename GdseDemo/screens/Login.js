import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default function Login({ navigation }) {
  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");

  const printStates = () => {
    console.log(userName + "" + password);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.appImgContainer}
        source={require('../screens/img/userLogin.png')}
      />
      <TextInput style={styles.placeHolderContainerUserName} placeholder='Username' value={userName} onChangeText={(e) => { setUserName(e) }} />
      <TextInput style={styles.placeHolderContainerPassword} placeholder='Password' value={password} onChangeText={(e) => { setpassword(e) }} />
      <TouchableOpacity
        style={styles.LoginBtnContainer}
        onPress={()=>{navigation.navigate("Search")}}
      >
        <Text style={{ color: '#ffff', fontSize: 20 }}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appImgContainer: {
    width: "25%",
    height: "17%",
  },
  placeHolderContainerUserName: {
    marginTop: '10%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 20

  },
  placeHolderContainerPassword: {
    marginTop: '5%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 20
  },
  LoginBtnContainer: {
    width: '60%',
    padding: 5,
    backgroundColor: "#1300FF",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3%',
    borderRadius: 20
  },
  datePickerContainer: {
    marginTop: 10,
},
DataPickerBtnContainer: {
    width: '17%',
    backgroundColor: "#ffffff",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
},
 DataPickerImgContainer: {
    width: '40%',
    height: '60%',
},
});
