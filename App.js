import { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contacts from './Contacts.js';
import Home from './Home.js';
import Zoom from './Zoom.js';
import contacts from './contacts.json';



function HomeScreen() {
  return (
    <Home/>
  );
}

function ContactsScreen({navigation}) {
  return (
    <Contacts contactInfo={contactInfo} navigation={navigation}/>
  );
}

function ZoomScreen() {
  return(<Zoom contactInfo={contactInfo}/>);
}

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
const contactInfo = {
  starredContacts: {"starredContacts": []},
  contacts: contacts.contacts,
  zoomedContact: 0,
  setZoomedContact: function (newId) {
      this.zoomedContact = newId;
  },
  setStarredContacts: function (newData){
    this.starredContacts = newData;
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

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const FirstLoad = async () => {
      setLoading(true);
      await contactInfo.loadStarredContacts();
      setLoading(false)
    }
    FirstLoad();
  }, []);
  if(!loading) {
    return (
      <NavigationContainer>
        <Stack.Navigator  initialRouteName="Screen">
          <Stack.Screen options={{headerShown: false}} name="Screen" component={AScreen} />
          <Stack.Screen name="Zoom" component={ZoomScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return <View style={[styles.container, styles.horizontal]}><ActivityIndicator size={100}/></View>;
}

function AScreen({navigation}) {
  return <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Contacts" component={ContactsScreen} navigation={navigation}/>
        </Tab.Navigator>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
