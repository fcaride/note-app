import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NoteList from './screens/NoteList';
import EditNote from './screens/EditNote';

const AppStack = () => {
  const BaseStack = createStackNavigator();

  const BaseStackNavigator = () => (
    <BaseStack.Navigator>
      <BaseStack.Screen name="NoteList" component={NoteList} options={{ title: 'Note List' }} />
      <BaseStack.Screen name="EditNote" component={EditNote} options={{ title: 'Edit Note' }} />
    </BaseStack.Navigator>
  );

  return <BaseStackNavigator />;
};
export default AppStack;
