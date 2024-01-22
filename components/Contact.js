import { StyleSheet, Text, View, Pressable, useEffect } from 'react-native';
import { useState } from 'react';



export default function Contact( {contact, contactInfo} ) {
  const [isStarred, setIsStarred] = useState(contactInfo.starredContacts.starredContacts.includes(contact['id']));
  function save(contact, contactInfo){
    starredContacts = contactInfo.starredContacts;
    if(starredContacts.starredContacts.includes(contact.id)){
      setIsStarred(false);
      starredContacts.starredContacts = starredContacts.starredContacts.filter((id) => id != contact.id);
      contactInfo.setStarredContacts(starredContacts);
      contactInfo.saveStarredContacts();
    }
    else{
      setIsStarred(true);
      starredContacts.starredContacts.push(contact.id);
      contactInfo.setStarredContacts(starredContacts);
      contactInfo.saveStarredContacts();
    }
  }
  if(isStarred)
      starred = 'jup';
  else
      starred = 'noup';
  return (
  <View style={styles.container}>
      <Text>{contact['firstName'] + ' ' + contact['lastName'] + ' ' + contact['unit'] + ' ' + contact['email'] + ' ' + contact['phone']}</Text><Pressable onPress={() => save(contact, contactInfo)}><Text>{starred}</Text></Pressable>
  </View>
  );
}

  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: 50,
        justifyContent: 'center',
    },
  });