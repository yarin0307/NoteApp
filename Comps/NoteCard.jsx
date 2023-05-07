import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button } from "react-native-elements";
import { TouchableOpacity, Image } from "react-native";
import { useContext } from "react";
import { NoteContext } from "../Comps/NoteApp";
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function NoteCard(props) {
    const { NoteArrContext, setNoteArrContext } = useContext(NoteContext);
    const [expandedCard, setExpandedCard] = useState(null);
    const handleCardPress = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    const onDeleteNote = (Number) => {
        setNoteArrContext(NoteArrContext.filter((note) => note.id !== Number))
    }
    return (
        <Card containerStyle={styles.cardContainer}>
            <Text style={styles.cardDate}>{props.item.date}</Text>
            <Text style={styles.cardTitle}>{props.item.title}</Text>
            <View style={styles.imageContainer}>
                {props.item.image && <Image source={{ uri: props.item.image }} style={styles.image} />}
            </View>
            <TouchableOpacity onPress={() => handleCardPress(props.index)}>
                <Text style={styles.cardBody}>
                    {expandedCard === props.index ? props.item.body : props.item.body.substring(0, 30)}
                    {expandedCard !== props.index && props.item.body.length > 30 && "..."}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCardPress(props.index)}>
                {expandedCard !== props.index && props.item.body.length > 30 && (
                    <Text style={styles.readMore}>Read more</Text>
                )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDeleteNote(props.id)}>
                <Icon style={styles.deleteButton}
                    type='font-awesome'
                    name='delete'
                    color='#f50'
                    size={20}
                    containerStyle={{ paddingRight: 10 }}
                />
            </TouchableOpacity>
        </Card>
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
    imageContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
});
