import { SafeAreaView, ScrollView, StyleSheet, Text, View, } from 'react-native';
import contacts from './contacts.json';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import UserAvatar from 'react-native-user-avatar';



export default function Home() {
  const contactArray = []
  contactArray.push
  for (let i = 0; i < contacts.contacts.length; i++) {
    if (contacts.contacts[i].starred == false) {
      continue
    }
    else {
      contactArray.push(
        <View style={styles.cardBox}>
          <UserAvatar size={45} style={styles.avatar} src={contacts.contacts.avatar} name={contacts.contacts[i].firstName + ' ' + contacts.contacts[i].lastName} />
          <Text style={styles.text}>{contacts.contacts[i].firstName} {contacts.contacts[i].lastName}</Text>
          <Text style={styles.text}>{contacts.contacts[i].unit}</Text>
          <MaterialCommunityIcons name="star-face" size={45} color="gold" outline="black" />
        </View>
      )
    }
  }
  return <SafeAreaView style={styles.container}><ScrollView style={styles.scroll}>{contactArray}</ScrollView></SafeAreaView>
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
