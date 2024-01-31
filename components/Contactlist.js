import { StyleSheet, View, ScrollView } from 'react-native';
import Contact from './Contact.js';

export default function Contactlist( {contactInfo, search, navigation} ) {
    return <View style={styles.container}>
              <ScrollView style={styles.scrollview}>
                {contactInfo.contacts.map(contact => addIntoList(contact, search, contactInfo, navigation))}
              </ScrollView>
          </View>
  }

function addIntoList(contact, search, contactInfo, navigation){
 if(contact['firstName'].toLowerCase().includes(search.toLowerCase()) || contact['lastName'].toLowerCase().includes(search.toLowerCase()) || contact['unit'].toLowerCase().includes(search.toLowerCase()))
      return <Contact key={contact.id} style={styles.contact}contact={contact} contactInfo={contactInfo} navigation={navigation}/>
  }

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    scrollview: {
      width: '90%',
    },
  });
