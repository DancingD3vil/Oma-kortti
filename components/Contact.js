import { StyleSheet, Text, View, Pressable, useEffect } from 'react-native';
import { useState } from 'react';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import UserAvatar from 'react-native-user-avatar';


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
      starred = <MaterialCommunityIcons style={styles.star} name="star-face" size={36} color="gold" />;
  else
      starred = <MaterialCommunityIcons style={styles.star} name="star-outline" size={36} color="gold" />;
  return (
  <View style={styles.container}>
      <UserAvatar size={64} style={styles.avatar} src={contact.avatar} name={contact['firstName'] + ' ' + contact['lastName']} /><View style={styles.info}><Text>{contact['firstName'] + ' ' + contact['lastName']}</Text><Text>{contact['unit']}</Text><Text>{contact['email']}</Text><Text>{contact['phone']}</Text></View><View style={styles.starcontainer}><Pressable onPress={() => save(contact, contactInfo)}>{starred}</Pressable></View>
  </View>
  );
}

  const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        width: '100%',
        height: 'auto',
        borderBottomWidth: 5,
        borderColor: '#bbc'
    },
    starcontainer: {
      flexDirection: 'column',
      flex: 1,
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
    }
  });