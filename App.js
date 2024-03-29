import { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contacts from './Contacts.js';
import Home from './Home.js';
import Zoom from './Zoom.js';
import contacts from './contacts.json';



function HomeScreen() {
  //reload screen when changing tabs
  const isFocused = useIsFocused();
  if (isFocused)
    return (
      <Home contactInfo={contactInfo}/>
    );
  //since useIsFocused reloads the screen both when focusing and unfocusing, load something less heavy when not focused, like a spinny thing 
  return <View style={[styles.container, styles.horizontal]}><ActivityIndicator size={100}/></View>;
}

function ContactsScreen({navigation}) {
  const isFocused = useIsFocused();
  if (isFocused)
  //navigation object is needed to navigate to zoom screen
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

//Object for handling everything to do with contacts and information related to them
const contactInfo = {
  starredContacts: {"starredContacts": []}, //an object with an array of unique identifiers to store starred contacts
  contacts: contacts.contacts, //an array of contacts
  zoomedContact: 0, //id to use in zoomed view
  chosenUnit: null, //unit focused in contacts screen, so it doesn't always go back to unit selection, when returning from zoom view
  units: [], //an array of units
  setStarredContacts: function (newData){
    this.starredContacts = newData;
  },
  setChosenUnit: function (newUnit){
    this.chosenUnit = newUnit;
  },
  setZoomedContact: function (newId) {
    this.zoomedContact = newId;
  },
  setUnits: function (newData){
    this.units = newData;
  },
  //function for loading contacts, currently just stores unique units into an array
  loadContacts: async function (){
    units = [];
    this.contacts.map(contact => {if(!units.includes(contact.unit)) units.push(contact.unit);});
    this.setUnits(units);
  },
  //function for loading starred contacts from asynchronous storage
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
  //function for saving current starred contacts object into asynchronous storage
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
  //load data when starting app
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
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator  initialRouteName="Screen">
            <Stack.Screen options={{headerShown: false}} name="Screen" component={AScreen} />
            <Stack.Screen name="Zoom" component={ZoomScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
  return <View style={[styles.container, styles.horizontal]}><ActivityIndicator size={100}/></View>;
}

function AScreen() {
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
