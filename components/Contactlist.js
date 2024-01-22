import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Contact from './Contact.js'

export default function Contactlist( {contactInfo, search} ) {
    return <View style={styles.container}>
              <ScrollView>
                {contactInfo.contacts.contacts.map(contact => addIntoList(contact, search, contactInfo))}
              </ScrollView>
          </View>
  }

function addIntoList(contact, search, contactInfo){
 if(contact['firstName'].toLowerCase().includes(search.toLowerCase()) || contact['lastName'].toLowerCase().includes(search.toLowerCase()) || contact['unit'].toLowerCase().includes(search.toLowerCase()))
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
