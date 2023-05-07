import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Modal,
    Alert,
    Pressable,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Card, Button } from "react-native-elements";
import CategoryList from "../Comps/CategoryList";
import { ScrollView } from "react-native";
import { useContext } from "react";
import { NoteContext } from "../Comps/NoteApp";

export default function HomePage(props) {
    const { CategoryArrContext, NoteArrContext } = useContext(NoteContext);
    const [text, setText] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [categoriesArray, setCategoriesArray] = useState(CategoryArrContext);

    const handleModalPress = () => {
        setModalVisible(!modalVisible);
        if (existCategory(text) == false) {
            categoriesArray.push(text);
            setCategoriesArray(categoriesArray);
        } else {
            alert("Category already exist");
        }
    };

    const existCategory = (category) => {
        let newArray = categoriesArray.filter((cat) => cat === category);
        if (newArray.length === 0) return false;
    };

    return (
        <View style={{ backgroundColor: "white", height: "100%" }}>
            <Text style={styles.headline}>
                <Text style={{ color: "#f4511e" }}>My</Text> Notes
            </Text>
            <ScrollView>
                <CategoryList
                    categoriesArray={CategoryArrContext}
                    InitNotesList={NoteArrContext}
                />
            </ScrollView>
            <Button
                icon={{
                    name: "add",
                    size: 30,
                    color: "white",
                }}
                buttonStyle={styles.buttonStyle}
                onPress={() => setModalVisible(true)}
            />

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Enter new category!</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter a category"
                                value={text}
                                onChangeText={setText}
                                keyboardShouldPersistTaps="always"
                            />
                            <Pressable
                                style={[styles.button, styles.buttonOpen]}
                                onPress={handleModalPress}
                            >
                                <Text style={styles.textStyle}>Add category</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headline: {
        fontSize: 60,
        marginBottom: 50,
        textAlign: "center",
        color: "#03A9F4",
        fontFamily: "AppleSDGothicNeo-Bold",
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
        backgroundColor: "#03A9F4",
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
        color: "white",
    },
    categoryCount: {
        fontSize: 30,
        fontFamily: "AppleSDGothicNeo-Bold",
        color: "white",
    },
    buttonStyle: {
        backgroundColor: "#f4511e",
        borderRadius: 50,
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        left: 300,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
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
        margin: 2,
    },
    buttonOpen: {
        backgroundColor: "#2196F3",
    },
    buttonClose: {
        backgroundColor: "#f4511e",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
    textInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
    },
});