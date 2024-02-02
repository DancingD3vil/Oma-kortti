import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View, } from 'react-native';
import contacts from './contacts.json';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import UserAvatar from 'react-native-user-avatar';
import { useState } from 'react';



export default function Home({contactInfo}) {
  const contactArray = []
  const starredContactList = contactInfo.starredContacts.starredContacts
  contactArray.push
  for (let i = 0; i < starredContactList.length; i++) {
      //Find index via id
      var targetId = starredContactList[i]
      var targetIndex = targetId - 1
      //use index to push correct contact
      contactArray.push(
        <View style={styles.cardBox}>
          <UserAvatar size={45} style={styles.avatar} src={contacts.contacts.avatar} name={contacts.contacts[targetIndex].firstName + ' ' + contacts.contacts[targetIndex].lastName} />
          <Text style={styles.text}>{contacts.contacts[targetIndex].firstName} {contacts.contacts[targetIndex].lastName}</Text>
          <Text style={styles.text}>{contacts.contacts[targetIndex].unit}</Text>
          <Pressable onPress={()=> unStar(starredContactList[targetId], contactInfo)}><MaterialCommunityIcons name="star-face" size={45} color="gold" outline="black" /></Pressable>
        </View>
      )
  }
  return <SafeAreaView style={styles.container}><ScrollView style={styles.scroll}>{contactArray}</ScrollView></SafeAreaView>
}

function unStar(id, cinfo){
  try{
    //find contact index in array via id
    //splice contact via index
    cinfo.starredContacts.starredContacts.splice(cinfo.starredContacts.starredContacts.indexOf(id), 1);
    cinfo.saveStarredContacts();
    window.location.reload();
  }
  catch(error){console.error(error);}
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    backgroundColor:"white",
  },
  scroll: {},
  cardBox:{
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    paddingVertical: 30,
    marginBottom: 2,
    marginTop: 4,
    borderColor: '#C0C0C0',
    alignItems: 'center',
    backgroundColor: "lightgray",
  },
  avatar: {},
  text: {fontSize: 20},
  icon: {fontSize: 50, borderColor: "black", borderWidth:1}
});
