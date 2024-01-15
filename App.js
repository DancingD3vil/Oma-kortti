import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Contacts from './Contacts.js';
import Home from './Home.js';
import contacts from './contacts.json';
import savedContacts from './savedContacts.json';



function HomeScreen() {
  return (
    <Home/>
  );
}

function ContactsScreen() {
  return (
    <Contacts contacts={contacts}/>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  alert(savedContacts);
  alert(contacts);
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Contacts" component={ContactsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}