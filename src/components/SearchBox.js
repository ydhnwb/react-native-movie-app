import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';


export const SearchBox = () => {
    return (
        <View style={styles.searchBoxContainer}>
            <TextInput placeholder="Search movies..." placeholderTextColor="#666" style={styles.searchBox}/>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBoxContainer: {
        margin: 10,
        backgroundColor: "#fff",
        elevation: 10,
        borderRadius: 4,
        marginVertical: 16,
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "stretch"
    },
    searchBox: {
        padding: 10,
        fontSize: 18
    }
})