import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import UserAvatar from 'react-native-user-avatar';


export default function Contact( {contact, contactInfo, navigation} ) {
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
      starred = <MaterialCommunityIcons style={styles.star} name="star-face" size={36} color="#f5e030" />;
  else
      starred = <MaterialCommunityIcons style={styles.star} name="star-outline" size={36} color="#a6a6a6" />;
  return (
  <View style={styles.container}>
      <Pressable style={styles.avatar} onPress={()=>{contactInfo.setZoomedContact(contact.id);navigation.navigate('Zoom');}}><UserAvatar size={64} style={styles.avatar} src={contact.avatar} name={contact['firstName'] + ' ' + contact['lastName']} /></Pressable>
      <View style={styles.info}>
        <Text>{contact['firstName'] + ' ' + contact['lastName']}</Text>
        <Text>{contact['unit']}</Text>
        <Text>{contact['email']}</Text>
        <Text>{contact['phone']}</Text>
      </View>
      <View style={styles.starcontainer}>
        <Pressable onPress={() => save(contact, contactInfo)}>{starred}</Pressable>
      </View>
  </View>
  );
}

  const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        boxSizing: 'border-box',
        backgroundColor: '#ffffff73',
        width: '100%',
        height: 'auto',
        borderBottomWidth: 5,
        borderColor: '#d8e9fa',
        borderRadius: 35,
    },
    starcontainer: {
      flexDirection: 'column',
      flex: 1,
      alignSelf: 'center'
    },
    star: {
      alignSelf: 'flex-end'
    },
    avatar: {
      height: 64,
      width: 64,
      alignSelf: 'center',
    },
    info: {
      flexDirection: 'column',
      paddingLeft: 10,
      opacity: 45
    }
  });