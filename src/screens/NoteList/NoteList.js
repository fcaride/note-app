import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, FlatList } from 'react-native';
import NoteCell from '../../components/NoteCell';
import AddButton from '../../components/AddButton';

const NoteList = ({ navigation, noteList, deleteNote }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <FlatList
      data={noteList}
      renderItem={({ item }) => (
        <NoteCell item={item} navigation={navigation} handleDelete={deleteNote} />
      )}
      keyExtractor={(_, index) => index.toString()}
    />
    <AddButton navigation={navigation} />
  </SafeAreaView>
);

export default NoteList;

NoteList.propTypes = {
  navigation: PropTypes.object.isRequired,
  noteList: PropTypes.array.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
