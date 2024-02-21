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
      var targetUnit = targetList[i].unit.toLowerCase()
      var unitStyle
      alert(targetUnit)
      switch (targetUnit) {
        case 'taitamo':
          unitStyle = "#FFFFFF";
        case 'luotsi':
          unitStyle = "#FGFGFG";
        
      }
      //use index to push correct contact
      contactArray.push(
        <View style={styles.cardBox} perse={backgroundColor={unitStyle}}>
          <UserAvatar size={45} style={styles.avatar} src={targetList[i].avatar} name={targetList[i].firstName + ' ' + targetList[i].lastName} />
          <Text style={styles.text}>{targetList[i].firstName} {targetList[i].lastName}</Text>
          <Text style={styles.text}>{targetList[i].unit}</Text>
          <Pressable onPress={() => unStar(targetList[i].id, contactInfo)}><MaterialCommunityIcons name="star-face" size={45} color="gold" outline="black" /></Pressable>
        </View>
      )
    }
  }
  else {
    contactArray.push(<View><Text>Looks like there's nothing here, head to the contact menu to add your contact person!</Text></View>)
  }
  return <View style={styles.dick}><SafeAreaView  style={styles.container}><ScrollView style={styles.scroll}>{contactArray}</ScrollView></SafeAreaView></View>
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
  dick: {
    backgroundColor: "#",
    flex: 1,
  },
  container: {
    justifyContent: 'space-evenly',
  },
  scroll: {
  },
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
    borderRadius: 200,
    color:"red"
  },
  avatar: {},
  text: { fontSize: 20 },
  icon: { fontSize: 50, borderColor: "black", borderWidth: 1 },
  luotsi: {
    backgroundColor: '#18752b',
  },
  taitamo: {
    backgroundColor: '#02607b',
  },
  topakka: {
    backgroundColor: '#bd2805',
  },
  ohjaamo: {
    backgroundColor: '#02295a',
  },
});
