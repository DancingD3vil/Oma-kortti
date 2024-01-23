import { StyleSheet, Text, View, Pressable, useEffect } from 'react-native';
import { useState } from 'react';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';


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
      starred = <View style={styles.star}><MaterialCommunityIcons name="star-face" size={36} color="gold" /></View>;
  else
      starred = <View style={styles.star}><MaterialCommunityIcons name="star-outline" size={36} color="gold" /></View>;
  return (
  <View style={styles.container}>
      <Avatar rounded icon={{name: 'user', type: 'font-awesome'}} activeOpacity={0.7} containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}/><Pressable onPress={() => save(contact, contactInfo)}>{starred}</Pressable><Text>{contact['firstName'] + ' ' + contact['lastName']}</Text><Text>{contact['unit']}</Text><Text>{contact['email']}</Text><Text>{contact['phone']}</Text>
  </View>
  );
}

  const styles = StyleSheet.create({
    container: {
        boxsizing: 'border-box',
        backgroundColor: '#fff',
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        display: 'grid',
    },
    star: {
      
    }
  });