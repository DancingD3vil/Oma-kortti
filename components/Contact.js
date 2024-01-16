import { StyleSheet, Text, View, Pressable } from 'react-native';
import savedContacts from '../savedContacts.json';


export default function Contact( {contact} ) {
    if(savedContacts['savedContacts'].includes(contact['id']))
        starred = 'jup';
    else
        starred = 'noup';
    return (
    <View style={styles.container}>
        <Text>{contact['firstName'] + ' ' + contact['lastName'] + ' ' + contact['unit'] + ' ' + contact['email'] + ' ' + contact['phone']}</Text><Pressable onPress={() => save(contact)}><Text>{starred}</Text></Pressable>
    </View>
    );
  }

  function save(contact){
    alert(savedContacts.savedContacts);
    if(savedContacts['savedContacts'].includes(contact.id)){
      savedContacts.savedContacts = savedContacts.savedContacts.filter((id) => id != contact.id);
    }
    else{
      savedContacts.savedContacts.push(contact.id);
    }
    alert(savedContacts.savedContacts);
  }

  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '90%',
        height: '10%',
        justifyContent: 'center',
    },
  });