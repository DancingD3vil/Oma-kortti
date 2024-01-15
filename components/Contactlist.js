import { StyleSheet, Text, View } from 'react-native';
import Contact from './Contact.js'

export default function Contactlist( {contactlist} ) {
    return <View style={styles.container}>
              {contactlist.map(contact => addIntoList(contact))}
          </View>
  }

function addIntoList(contact){
 // if(contact['firstName'].includes(search) || contact['lastName'].includes(search) || contact['unit'].includes(search))
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
