import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View, } from 'react-native';
import contacts from './contacts.json';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import UserAvatar from 'react-native-user-avatar';
import { useState } from 'react';
import contactFile from './components/Contact.js'



export default function Home({ contactInfo }) {
  const [contactArray, updateContactArray] = useState([])
  const [starredContactList, updateStarredContactList] = useState(contactInfo.starredContacts.starredContacts)
  //Find index via id
  var targetList = contactInfo.contacts.filter((id) => contactInfo.starredContacts.starredContacts.includes(id.id))
  if (targetList.length > 0) {
    for (let i = 0; i < targetList.length; i++) {
      //use index to push correct contact
      contactArray.push(
        <View style={styles.cardBox}>
          <UserAvatar size={45} style={styles.avatar} src={targetList[i].avatar} name={targetList[i].firstName + ' ' + targetList[i].lastName} />
          <Text style={styles.text}>{targetList[i].firstName} {targetList[i].lastName}</Text>
          <Text style={styles.text}>{targetList[i].unit}</Text>
          <Pressable onPress={() => unStar(targetList[i].id, contactInfo)}><MaterialCommunityIcons name="star-face" size={45} color="gold" outline="black" /></Pressable>
        </View>
      )
    }
  }
  else {
    contactArray.push(
      <View><Text>Looks like there's nothing here, wanna add something?</Text>
      </View>
    )
  }
  return <SafeAreaView style={styles.container}><ScrollView style={styles.scroll}>{contactArray}</ScrollView></SafeAreaView>
  function unStar(id, cinfo) {

    try {

    cinfo.starredContacts.starredContacts.splice(starredContactList.indexOf(id), 1)
      
      cinfo.saveStarredContacts()
      cinfo.loadStarredContacts()
      updateContactArray([])
      updateStarredContactList(cinfo.starredContacts.starredContacts)

    }
    catch (error) { console.error(error); }
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    backgroundColor: "white",
  },
  scroll: {},
  cardBox: {
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
  text: { fontSize: 20 },
  icon: { fontSize: 50, borderColor: "black", borderWidth: 1 }
});
