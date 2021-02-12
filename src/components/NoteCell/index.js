import React from 'react';
import PropTypes from 'prop-types';
import Swipeout from 'react-native-swipeout';

import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const NoteCell = ({ item, navigation, handleDelete }) => {
  const swipeBtns = [
    {
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      onPress: () => handleDelete(item.id),
    },
  ];

  const textToShow = item.text.length > 35 ? `${item.text.slice(0, 35)}...` : item.text;

  return (
    <Swipeout right={swipeBtns} autoClose="true" backgroundColor="transparent">
      <TouchableOpacity style={styles.cell} onPress={() => navigation.navigate('EditNote', item)}>
        <Text style={styles.text}>{textToShow}</Text>
      </TouchableOpacity>
    </Swipeout>
  );
};

export default NoteCell;

NoteCell.propTypes = {
  navigation: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
