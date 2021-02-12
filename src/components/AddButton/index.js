import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const AddButton = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('EditNote')} style={styles.button}>
    <Text style={styles.plusText}>+</Text>
  </TouchableOpacity>
);

export default AddButton;

AddButton.propTypes = {
  navigation: PropTypes.object.isRequired,
};
