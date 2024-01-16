import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import contacts from './contacts.json';


export default function Home() {
    getStarredContacts()
}

function getStarredContacts() {
  for (i=0; i<contacts.contacts.length; i++){
    var contact = createContactComponent(i);
    return contact
  }
}
function createContactComponent(index){
  return (<Text>{index}</Text>)
}