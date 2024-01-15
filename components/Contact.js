import { StyleSheet, Text, View } from 'react-native';
import savedContacts from '../savedContacts.json';


export default function Contact( {contact} ) {
    if(contact['starred'])
        starred = 'jup';
    else
        starred = 'nop';
    return (
    <View style={styles.container}>
        <Text>{contact['firstName'] + ' ' + contact['lastName'] + ' ' + contact['unit'] + ' ' + contact['email'] + ' ' + contact['phone'] + ' ' + starred}</Text>
    </View>
    );
  }

  function save(contact){
    alert('a');
  }

  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '90%',
        height: '10%',
        justifyContent: 'center',
    },
  });