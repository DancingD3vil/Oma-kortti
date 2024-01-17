import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  const [savedContacts, setSavedContacts] = useState(JSON.parse('{"savedContacts":[]}'));
  useEffect(() => {
    const FirstLoad = async () => {
      try {
          const conts = await AsyncStorage.getItem('savedContacts');
          if (conts != null)
            setSavedContacts(JSON.parse(conts));
          else
            setSavedContacts(JSON.parse('{"savedContacts":[]}'))  
      } catch (error) {
        alert(error);
      }
    }
    FirstLoad();
  }, []);
  alert(JSON.stringify(savedContacts));
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Contacts" component={ContactsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
