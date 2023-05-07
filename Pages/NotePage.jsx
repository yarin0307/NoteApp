import { View, TextInput } from 'react-native';
import { Input, Button, Card } from 'react-native-elements';
import React, { useContext, useState } from 'react'
import { TouchableWithoutFeedback, Keyboard, Image, ScrollView } from 'react-native';
import { NoteContext } from '../Comps/NoteApp';
import * as ImagePicker from 'expo-image-picker';


export default function NotePage(props) {
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const CategoryName = props.route.params.CategoryName;
  const NoteList = props.route.params.NoteList;
  const date = new Date().toLocaleString();
  const { NoteArrContext, setNoteArrContext } = useContext(NoteContext);


  const handleSaveNote = () => {
    const Newnote = {
      id: NoteArrContext.length + 1,
      category: CategoryName,
      title: title,
      body: note,
      date: date,
      image: image
    };
    const arr = [...NoteArrContext, Newnote]
    setNoteArrContext(arr);
    props.navigation.navigate("Category Page", {
      CategoryName: CategoryName,
      NoteList: NoteArrContext,
    });
  };

  const handlepickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      console.log(result.uri);
    }
  };


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ScrollView>
          <Card containerStyle={styles.card}>
            <Input
              value={date}
              inputContainerStyle={styles.inputContainer}
              leftIcon={{ type: 'font-awesome', name: 'calendar' }}
              inputStyle={styles.inputDate}
              editable={false}
            />
            <Input
              placeholder="Note Title"
              value={title}
              onChangeText={setTitle}
              inputContainerStyle={styles.inputContainer}
              leftIcon={{ type: 'font-awesome', name: 'sticky-note' }}
              inputStyle={styles.input}
            />

            <TextInput
              placeholder="Write your note here"
              value={note}
              onChangeText={setNote}
              multiline={true}
              style={styles.textInput}
            />
            <View style={styles.imageContainer}>
              {image ? (
                <Image source={{ uri: image }} style={styles.image} />

              ) : (
                <Button title="Upload Image" onPress={handlepickImage} buttonStyle={styles.button} />
              )}
            </View>
            <Button
              title="Save Note"
              onPress={handleSaveNote}
              buttonStyle={styles.button}
            />
          </Card>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20
  },
  card: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#f7f7f7'
  },
  inputContainer: {
    marginVertical: 10
  },
  input: {
    fontSize: 18,
    paddingLeft: 10,
    fontFamily: "AppleSDGothicNeo-Bold"

  },
  inputDate: {
    fontSize: 12,
    paddingLeft: 10,
    fontFamily: "AppleSDGothicNeo-Bold",
    color: 'grey'
  },
  textInput: {
    height: 200,
    padding: 10,
    fontSize: 18,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    marginTop: 10,
    fontFamily: "AppleSDGothicNeo-Bold"
  },
  button: {
    backgroundColor: '#3DDC84',
    marginTop: 20,
    borderRadius: 20,
    fontFamily: "AppleSDGothicNeo-Bold"
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

};

