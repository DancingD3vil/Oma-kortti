import { View, ScrollView, StyleSheet } from 'react-native';
import Contact from './Contact.js';
import { useState } from 'react';

export default function Contactlist( {contactInfo, navigation, contactlistStyle = defaultContactlistStyle, contactStyle = defaultContactStyle, contactFilter = null} ) {
    const [updateList, update] = useState([]);
    if (contactFilter != null)
      contactlist = contactInfo.contacts.filter(contactFilter);
    else
      contactlist = contactInfo.contacts; 
    return <View style={contactlistStyle.container}>
              <ScrollView style={contactlistStyle.scrollview}>
                {contactlist.map(contact => addIntoList(contact, contactInfo, navigation, contactStyle, update))}
              </ScrollView>
          </View>
  }

function addIntoList(contact, contactInfo, navigation, contactStyle, update){
      return <Contact key={contact.id} contact={contact} contactInfo={contactInfo} navigation={navigation} contactStyle={contactStyle} listUpdateFunction={update}/>
  }

  const defaultContactlistStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    scrollview: {
      width: '90%',
    },
  });
  
  const defaultContactStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        boxSizing: 'border-box',
        backgroundColor: '#ffffff73',
        width: '100%',
        height: 'auto',
        borderRadius: 35,
    },
    starcontainer: {
      flexDirection: 'column',
      flex: 1,
      alignSelf: 'center'
    },
    star: {
      alignSelf: 'flex-end',
      size: 50
    },
    avatar: {
      size: 64,
      alignSelf: 'center',
    },
    info: {
      flexDirection: 'column',
      paddingLeft: 10,
      opacity: 45,
      width: "60%"
    },
    separator: {
      height: 10,
      backgroundColor: '#00000000'
    }
  });