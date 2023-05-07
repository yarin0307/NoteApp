import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import NoteList from "../Comps/NoteList";
import { useContext } from "react";
import { NoteContext } from "../Comps/NoteApp";
import { ScrollView } from "react-native";


const CategoryPage = (props) => {
    const { NoteArrContext } = useContext(NoteContext)
    const CategoryName = props.route.params.CategoryName;
    const NoteArr = props.route.params.NoteList;
    const [NoteCategoryList, setNoteCategoryList] = useState([]);
    useEffect(() => {
        setNoteCategoryList(
            NoteArrContext.filter((note) => note.category === CategoryName)
        );
    }, [NoteArrContext]);


    return (
        <View style={{ backgroundColor: "white", height: "100%" }}>
            <View style={styles.container1}>
                <Text style={styles.category}>{CategoryName}</Text>
                <View style={styles.lengthContainer}>
                    <View style={styles.lengthCircle}>
                        <Text style={styles.lengthText}>{NoteCategoryList.length}</Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <NoteList NoteCategoryList={NoteCategoryList} />

                <Button
                    icon={{
                        name: 'add',
                        size: 30,
                        color: 'white',
                    }}
                    buttonStyle={styles.buttonStyle}
                    onPress={() => props.navigation.navigate("Note Page", { CategoryName: CategoryName, NoteList: NoteArr })}
                />
            </ScrollView>
        </View>
    );
};
export default CategoryPage;
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

