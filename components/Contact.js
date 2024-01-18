import { StyleSheet, Text, View, Pressable, useEffect } from 'react-native';


export default function Contact( {contact, contactInfo} ) {
    if(contactInfo.starredContacts.starredContacts.includes(contact['id']))
        starred = 'jup';
    else
        starred = 'noup';
    return (
    <View style={styles.container}>
        <Text>{contact['firstName'] + ' ' + contact['lastName'] + ' ' + contact['unit'] + ' ' + contact['email'] + ' ' + contact['phone']}</Text><Pressable onPress={() => save(contact, contactInfo)}><Text>{starred}</Text></Pressable>
    </View>
    );
  }

  function save(contact, contactInfo){
    alert(starredContacts.starredContacts);
    if(starredContacts['starredContacts'].includes(contact.id)){
      starredContacts.starredContacts = starredContacts.starredContacts.filter((id) => id != contact.id);
    }
    else{
      starredContacts.starredContacts.push(contact.id);
    }
    alert(starredContacts.starredContacts);
  }

  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '90%',
        height: '10%',
        justifyContent: 'center',
    },
  });