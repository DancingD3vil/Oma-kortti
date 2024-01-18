import { StyleSheet, Text, View } from 'react-native';
import Contact from './Contact.js'

export default function Contactlist( {contactInfo, search} ) {
    return <View style={styles.container}>
              {contactInfo.contacts.contacts.map(contact => addIntoList(contact, search, contactInfo))}
          </View>
  }

function addIntoList(contact, search, contactInfo){
 //if(contact['firstName'].includes(search) || contact['lastName'].includes(search) || contact['unit'].includes(search))
      return <Contact contact={contact} contactInfo={contactInfo}/>
  }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#bbc',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
  });
