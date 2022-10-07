import { View, Text, TouchableOpacity, StyleSheet, Button, Image } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import DatePicker from 'react-native-date-picker'
import { Row } from 'native-base';

export default function SearchVehical() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const printStates = () => {
        console.log(searchQuery + " " + date);
    }
    return (
        <View style={styles.container}>
            <View style={styles.subContainer_1}>
                <Searchbar style={styles.SearchBarContainer} placeholder="Type Location"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />

                <TouchableOpacity style={styles.DataPickerBtnContainer} onPress={() => setOpen(true)}>
                    <Image style={styles.DataPickerImgContainer}
                        source={require('../screens/img/calendar.png')}
                    />
                </TouchableOpacity>

                <DatePicker modal open={open} date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />

                <TouchableOpacity style={styles.cheackBtnContainer} onPress={printStates}>
                    <Text style={{ color: '#1300FF', fontSize: 20 }}>Cheak</Text>
                </TouchableOpacity>
            </View>

            <View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer_1: {
        flexDirection: "row",
        top: 10
    },
    SearchBarContainer: {
        width: "65%",
        height: "90%"
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
    cheackBtnContainer: {
        width: '17%',
        borderColor: "#1300FF",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
    }
});