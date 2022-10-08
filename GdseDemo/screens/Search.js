import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { ListItem } from "react-native-elements";
import filter from "lodash.filter";
import { Searchbar } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        vehicalNumber: "1",
        vehicalName: "Benz",
        location: "Kelaniya",
        vehicalImage: "temparyImage",
        vehicalAdddate: "2022-10-10",
        otherDetails: "aaaaaaaaaaaaaa",
    },
    {
        vehicalNumber: "2",
        vehicalName: "Audi",
        location: "Kelaniya",
        vehicalImage: "temparyImage",
        vehicalAdddate: "2545-10-10",
        otherDetails: "aavvvvvaaa",
    },
    {
        vehicalNumber: "3",
        vehicalName: "Benz",
        location: "Colombo",
        vehicalImage: "temparyImage",
        vehicalAdddate: "2022-10-10",
        otherDetails: "rrrrrr",
    },
    {
        vehicalNumber: "4",
        vehicalName: "Benz",
        location: "Galle",
        vehicalImage: "temparyImage",
        vehicalAdddate: "2022-10-10",
        otherDetails: "aeeeeeaa",
    },
];

function ForgotMpin() {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity
                style={{width: '17%',
                backgroundColor: "#ffffff",
                height: 50,
                alignItems: 'center',
                justifyContent: 'center'}}
                onPress={() => navigation.navigate("SaveVehical")}
            >
                <Image style={{width: '40%',
        height: '60%'}}
                    source={require('../screens/img/plus.png')}
                />
            </TouchableOpacity>
        </View>
    );
}

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: DATA,
            error: null,
            searchValue: "",
            date: new Date(),
            open: false,
        };
        this.arrayholder = DATA;
        // this.navigation = useNavigation();
    }

    searchFunction = (text) => {
        const updatedData = this.arrayholder.filter((vehical) => {
            const vehical_location = `${vehical.location.toUpperCase()})`;
            const vehical_data = text.toUpperCase();
            return vehical_location.indexOf(vehical_data) > -1;
        });
        this.setState({ data: updatedData, searchValue: text });
    };


    // const [date, setDate] = useState(new Date())
    // const [open, setOpen] = useState(false)

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <Searchbar
                        style={styles.searchBar}
                        placeholder="Type Location"
                        lightTheme

                        value={this.state.searchValue}
                        onChangeText={(text) => this.searchFunction(text)}

                    />

                    <TouchableOpacity style={styles.DataPickerBtnContainer} onPress={() => {
                        let state = this.state;
                        state.open = true;
                        this.setState({ state })
                    }}>
                        <Image style={styles.DataPickerImgContainer}
                            source={require('../screens/img/calendar.png')}
                        />
                    </TouchableOpacity>

                    <DatePicker modal open={this.state.open} date={this.state.date}
                        onConfirm={(date) => {

                            let state = this.state;
                            state.open = false;
                            state.date = date;
                            this.setState({ state })
                        }}
                        onCancel={() => {
                            let state = this.state;
                            state.open = false;
                            this.setState({ state })
                        }}
                    />
            
                    <TouchableOpacity style={styles.addBtnContainer}  onPress={() => { this.props.navigation.navigate('SaveVehical') }}>
                        <Image style={styles.addBtnImageContainer}
                            source={require('../screens/img/plus.png')}
                        />
                    </TouchableOpacity>

                </View>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={{
                            borderWidth: 1, marginBottom: '5%', padding: 5, marginVertical: 8,
                            marginHorizontal: 16,
                        }} onPress={() => { console.log("hello"); }}>
                            <Text  >{item.location}</Text>
                            <Text  >{item.vehicalNumberd}</Text>
                            <Text  >{item.vehicalName}</Text>
                            <Text  >{item.vehicalImage}</Text>
                            <Text  >{item.vehicalAdddate}</Text>
                            <Text  >{item.otherDetails}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        );
    }
}

export default Search;

const styles = StyleSheet.create({
    container: {
        padding: 2,
    },
    searchContainer: {
        flexDirection: "row",
    },
    searchBar: {
        width: "65%",
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
    addBtnContainer: {
        width: '17%',
        backgroundColor: "#ffffff",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addBtnImageContainer: {
        width: '40%',
        height: '60%',
    }
});
