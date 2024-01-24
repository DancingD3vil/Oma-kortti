import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import contacts from './contacts.json';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';


export default function Home() {
  const contactArray = []
  contactArray.push
  for (let i = 0; i < contacts.contacts.length; i++) {
    if (contacts.contacts[i].starred == false) {
      continue
    }
    else {
      contactArray.push(
        <View style={styles.membrane}>
          <Avatar rounded icon={{name: 'user', type: 'font-awesome'}} activeOpacity={0.7} />
          <Text style={styles.mlegg}>{contacts.contacts[i].firstName} {contacts.contacts[i].lastName}</Text>
          <Text style={styles.mlegg}>{contacts.contacts[i].unit}</Text>
          <MaterialCommunityIcons name="star-outline" size={36} color="gold" />
        </View>
      )
    }
  }
  return <SafeAreaView style={styles.chicken}><ScrollView style={styles.egg}>{contactArray}</ScrollView></SafeAreaView>
}
const styles = StyleSheet.create({
  chicken: {
    justifyContent: 'space-evenly',
  },
  egg: {
    
  },
  membrane:{
    justifyContent: 'space-evenly',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 50,
    borderColor: '#000000',
    alignItems: 'center'
    
  },
  avatar: {},
  mlegg: {fontSize: 20},
  icon: {fontSize: 50}
});
