import { useEffect, useState,  } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabView } from 'react-native-tab-view';
import Contacts from './Contacts.js';
import Home from './Home.js';
import Zoom from './Zoom.js';
import contacts from './contacts.json';
import { json } from 'react-router-dom';



function HomeScreen() {
  const isFocused = useIsFocused();
  if (isFocused)
    return (
      <Home contactInfo={contactInfo}/>
    );
  return <View style={[styles.container, styles.horizontal]}><ActivityIndicator size={100}/></View>;
}

function ContactsScreen({navigation}) {
  const isFocused = useIsFocused();
  if (isFocused)
    return (
      <Contacts contactInfo={contactInfo} navigation={navigation}/>
    );
  return <View style={[styles.container, styles.horizontal]}><ActivityIndicator size={100}/></View>;
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
  units: [],
  setStarredContacts: function (newData){
    this.starredContacts = newData;
  },
  setZoomedContact: function (newId) {
    this.zoomedContact = newId;
  },
  setUnits: function (newData){
    this.units = newData;
  },
  loadContacts: async function (){
    units = [];
    this.contacts.map(contact => {if(!units.includes(contact.unit)) units.push(contact.unit);});
    this.setUnits(units);
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
      await contactInfo.loadContacts();
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

function AScreen(navigation) {
  /*const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home' },
    { key: 'contacts', title: 'Contacts' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={({ route }) => { 
        switch (route.key) {
        case 'home':
            return <HomeScreen/>;
        case 'contacts':
            return <ContactsScreen navigation={navigation}/>;
        default:
            return null;
        }
    }}
      onIndexChange={setIndex}
      initialLayout={{ width: '100%' }}
    />
  );*/
  return <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen}  options={{unmountOnBlur: true}} />
          <Tab.Screen name="Contacts" component={ContactsScreen} options={{unmountOnBlur: true}}/>
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
