import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './MainScreen';
import ContactInputScreen from './ContactInputScreen';

const Stack = createStackNavigator();

export default function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main">
          {(props) => <MainScreen {...props} contacts={contacts} addContact={addContact} />}
        </Stack.Screen>
        <Stack.Screen name="ContactInput" component={ContactInputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}