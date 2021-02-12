import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, TouchableOpacity, TextInput, Text } from 'react-native';
import styles from './styles';

const NoteCell = ({ navigation, route, saveNote, addNote }) => {
  const [value, setValue] = useState('');
  const { params } = route;

  let text = '';
  let id;
  if (params) {
    text = params.text;
    id = params.id;
  }

  const save = () => {
    if (id) {
      saveNote(value, id);
    } else {
      addNote(value);
    }
    navigation.goBack();
  };

  const buildSaveButton = () => (
    <TouchableOpacity onPress={save} style={styles.button}>
      <Text style={styles.textButton}>Save</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    setValue(text);
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: buildSaveButton,
    });
  });

  return (
    <ScrollView keyboardDismissMode="interactive" style={styles.container}>
      <TextInput multiline={true} onChangeText={setValue} autoFocus={true} value={value} />
    </ScrollView>
  );
};
export default NoteCell;

NoteCell.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  saveNote: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
};
