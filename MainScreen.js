import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import * as MailComposer  from 'expo-mail-composer';


const MainScreen = ({ navigation, contacts, addContact }) => {
  const handleContactPress = (contact) => {
    MailComposer.composeAsync({
      recipients: [contact.email],
      subject: 'MailComposer',
      body: `Dear ${contact.firstName} ${contact.lastName},`
    }).then((result) => {
      if (result.status === 'sent') {
        Alert.alert('Email sent successfully');
      } else {
        Alert.alert('Email failed to send');
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  const renderContact = ({ item }) => (
    <TouchableOpacity onPress={() => handleContactPress(item)}>
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.firstName} {item.lastName}</Text>
        <Text style={styles.contactEmail}>{item.email}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={{alignItems: 'center', fontWeight: 'bold', fontSize: 50, paddingLeft: 100}}>MidTerm</Text>
      <Text style={{alignItems: 'center', fontWeight: 'bold', fontSize: 20, paddingLeft: 110, margin:10}}>y_shah142873</Text>
      <TouchableOpacity  onPress={() => navigation.navigate('ContactInput', { addContact })} style = {{position: 'absolute', top: 0, right: 10, borderRadius: 15}}>
         <AntDesign name="plus" size={40} color="black" />
      </TouchableOpacity>
      <FlatList
        data={contacts}
        renderItem={renderContact}
        keyExtractor={(item) => item.email}
        style={styles.contactList}
      />
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
  },
  contactList:{
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  contact:{
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactInfo:{
    marginLeft: 10,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactEmail: {
    fontSize: 16,
  },
  header:{
    marginRight: 200
  }
})

export default MainScreen;