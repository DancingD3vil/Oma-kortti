import { useEffect } from 'react';
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
zoomedContact = {
  contactId: 0,
  setZoomedContact: function (newId) {
    this.contactId = newId;
  }
}
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

//function delay(time) {
//  return new Promise(resolve => setTimeout(resolve, time));
//}

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
      <Stack.Navigator  initialRouteName="Screen">
        <Stack.Screen options={{headerShown: false}} name="Screen" component={AScreen} />
        <Stack.Screen name="Zoom" component={ZoomScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AScreen({navigation}) {
  return <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Contacts" component={ContactsScreen} navigation={navigation}/>
        </Tab.Navigator>
}
