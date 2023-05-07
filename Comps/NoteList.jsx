import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import NoteCard from "./NoteCard";

export default function NoteList(props) {

    return (
        <View style={styles.container}>
            {props.NoteCategoryList.map((item, index) => (
          <NoteCard key={index} item={item} index={index} id={item.id}/>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    cardContainer: {
        marginVertical: 10,
        width: "95%",
        marginBottom: 20,

    },
    cardTitle: {
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "AppleSDGothicNeo-Bold",
        textAlign: "center",
        marginBottom: 10,

    },
    cardDate: {
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "AppleSDGothicNeo-Bold",
        color: "#f4511e",
        marginBottom: 10
    },
    cardBody: {
        marginVertical: 10,
        fontSize: 20,
        fontFamily: "AppleSDGothicNeo-Bold",

    },
    readMore: {
        color: "#007bff",
        textAlign: "right",
        marginTop: 10,
    },
    lengthCircle: {
        width: 30,
        height: 30,
        borderRadius: 30,
        backgroundColor: "#f4511e",
        alignItems: "center",
        justifyContent: "center",
    },
    lengthText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
    category: {
        fontSize: 32,
        fontWeight: "bold",
        marginRight: 10,
        color: "#f4511e",
    },
    container1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    buttonStyle: {
        backgroundColor: '#f4511e',
        borderRadius: 50,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        left: 300,
    },
    deleteButton: {
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'right',
        marginTop: 10,

    },
});
