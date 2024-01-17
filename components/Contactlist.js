import { StyleSheet, Text, View } from 'react-native';
import Contact from './Contact.js'
import savedcontacts from '../savedContacts.json';

export default function Contactlist( {contactlist, search} ) {
    return <View style={styles.container}>
              {contactlist.map(contact => addIntoList(contact, search))}
          </View>
  }

function addIntoList(contact, search){
 //if(contact['firstName'].includes(search) || contact['lastName'].includes(search) || contact['unit'].includes(search))
      return <Contact contact={contact}/>
  }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#bbc',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
  });
