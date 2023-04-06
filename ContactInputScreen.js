import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const ContactInputScreen = ({ navigation, route }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    const newContact = { firstName, lastName, email };
    const addContact = route.params.addContact;
    addContact(newContact);
    navigation.goBack();
  };

  return (
    <View style={{ marginHorizontal: 20, marginTop: 20 }}>
    <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 10, paddingLeft: 100}}>
      Add Contact
    </Text>
    <View style={{ marginBottom: 15 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>First Name</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setFirstName(text)}
        value={firstName}
        placeholder="First Name"

      />
    </View>
    <View style={{ marginBottom: 15 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Last Name</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setLastName(text)}
        value={lastName}
        placeholder="Last Name"
      />
    </View>
    <View style={{ marginBottom: 30 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Email Address</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Email Address"
      />
    </View>
    <View style={styles.buttonContainer}>
      <Button title="Save" onPress={handleSave} />
    </View>
  </View>

  );
};

const styles = {
    textInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      fontSize: 16
    },
    buttonContainer: {
      marginHorizontal: 60,
      marginBottom: 40,

      padding: 5,
    }
  };

export default ContactInputScreen;