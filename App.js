import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Contacts from './Contacts.js';
import Home from './Home.js';
import contacts from './contacts.json';
import { json } from 'react-router-dom';



function HomeScreen() {
  return (
    <Home/>
  );
}

function ContactsScreen() {
  return (
    <Contacts contactInfo={contactInfo}/>
  );
}

const Tab = createMaterialTopTabNavigator();
const contactInfo = {
  starredContacts: {"starredContacts": []},
  contacts: contacts,
  setStarredContacts: function (newData){
    this.starredContacts = newData;
  },
  getStarredContacts: function (){
    return this.starredContacts;
  },
  loadStarredContacts: async function (){
    try {
      const conts = await AsyncStorage.getItem('starredContacts');
      if (conts != null){
        this.setStarredContacts(JSON.parse(conts));
      }
      else{
        this.setStarredContacts(JSON.parse('{"starredContacts":[]}'));
      }  
    } catch (error) {
      alert(error);
    }
  },
  saveStarredContacts: async function (){
    try {
      await AsyncStorage.setItem('starredContacts', JSON.stringify(this.starredContacts));
    } catch (error) {
      alert(error);
    }
  }
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export default function App() {
  useEffect(() => {
    const FirstLoad = async () => {
      contactInfo.loadStarredContacts();
    }
    FirstLoad();
  }, []);
  //alert(JSON.stringify(contactInfo.starredContacts));
  //delay(10000).then(() => {alert(JSON.stringify(contactInfo.starredContacts))});
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Contacts" component={ContactsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
