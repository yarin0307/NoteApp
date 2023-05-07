import { View, Text, StyleSheet, TextInput, Modal, Alert, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Card, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


export default function CategoryCard(props) {
    const navigation = useNavigation();

    return (
        <Card containerStyle={styles.categoryCard}>
            <View style={styles.categoryContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Category Page", { CategoryName: props.cat, NoteList: props.InitNotesList })}>
                    <Text style={styles.categoryText}>{props.cat}:</Text>
                </TouchableOpacity>
                <Text style={styles.categoryCount}>{props.InitNotesList.filter((note) => note.category === props.cat).length}</Text>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    headline: {
        fontSize: 60,
        marginBottom: 50,
        textAlign: "center",
        color: "#03A9F4",
        fontFamily: "AppleSDGothicNeo-Bold"
    },
    categoriesContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    categoryCard: {
        width: "60%",
        padding: 10,
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: '#03A9F4'
    },
    categoryContainer: {
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 20,
        justifyContent: "center",
    },
    categoryText: {
        fontSize: 30,
        marginRight: 10,
        fontFamily: "AppleSDGothicNeo-Bold",
        color: "white"

    },
    categoryCount: {
        fontSize: 30,
        fontFamily: "AppleSDGothicNeo-Bold",
        color: "white"


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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin: 2
    },
    buttonOpen: {
        backgroundColor: '#2196F3',
    },
    buttonClose: {
        backgroundColor: '#f4511e',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    textInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
    },
});