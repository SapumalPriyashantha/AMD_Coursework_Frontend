import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import filter from "lodash.filter";

const DATA = [
{
	vehicalNumber: "1",
	vehicalName: "Benz",
    location :"Kelaniya",
    vehicalImage:"temparyImage",
    vehicalAdddate:"2022-10-10",
    otherDetails:"aaaaaaaaaaaaaa",
},
{
	vehicalNumber: "2",
	vehicalName: "Audi",
    location :"Kelaniya",
    vehicalImage:"temparyImage",
    vehicalAdddate:"2545-10-10",
    otherDetails:"aavvvvvaaa",
},
{
	vehicalNumber: "3",
	vehicalName: "Benz",
    location :"Colombo",
    vehicalImage:"temparyImage",
    vehicalAdddate:"2022-10-10",
    otherDetails:"rrrrrr",
},
{
	vehicalNumber: "4",
	vehicalName: "Benz",
    location :"Galle",
    vehicalImage:"temparyImage",
    vehicalAdddate:"2022-10-10",
    otherDetails:"aeeeeeaa",
},
];

const Item = ({ title }) => {
return (
	<View style={styles.item}>
	<Text>{title}</Text>
	</View>
);
};

const renderItem = ({ item }) => <Item title={item.title} />;
class Search extends Component {
constructor(props) {
	super(props);
	this.state = {
	loading: false,
	data: DATA,
	error: null,
	searchValue: "",
	};
	this.arrayholder = DATA;
}

searchFunction = (text) => {
    // const updatedData = this.arrayholder.filter((item) => {
    //     const item_data = `${item.title.toUpperCase()})`;
    //     const text_data = text.toUpperCase();
    //     return item_data.indexOf(text_data) > -1;
    //     });
    //     this.setState({ data: updatedData, searchValue: text });

	const updatedData = this.arrayholder.filter((vehical) => {
	const vehical_location = `${vehical.location.toUpperCase()})`;
	const vehical_data = text.toUpperCase();
	return vehical_location.indexOf(vehical_data) > -1;
	});
	this.setState({ data: updatedData, searchValue: text });
};

render() {
	return (
	<View style={styles.container}>
		<SearchBar
		placeholder="Type Location"
		lightTheme
		round
		value={this.state.searchValue}
		onChangeText={(text) => this.searchFunction(text)}
		autoCorrect={false}
		/>
		<FlatList
		data={this.state.data}
		renderItem={({ item }) =>
                    <TouchableOpacity style={{borderWidth:1, marginBottom:'5%', padding:5}} onPress={()=>{console.log("hello");}}>
                        <Text style={{marginBottom:10,fontWeight:'bold'}} >{item.location}</Text>
                        <Text style={{marginBottom:10}} >{item.vehicalNumberd}</Text>
                        <Text style={{marginBottom:10}} >{item.vehicalName}</Text>
                        <Text style={{marginBottom:10}} >{item.vehicalImage}</Text>
                        <Text style={{marginBottom:10}} >{item.vehicalAdddate}</Text>
                        <Text style={{marginBottom:10}} >{item.otherDetails}</Text>
                    </TouchableOpacity>
                }
		keyExtractor={(item) => item.id}
		/>
	</View>
	);
}
}

export default Search;

const styles = StyleSheet.create({
container: {
	marginTop: 30,
	padding: 2,
},
item: {
	backgroundColor: "#f5f520",
	padding: 20,
	marginVertical: 8,
	marginHorizontal: 16,
},
});
