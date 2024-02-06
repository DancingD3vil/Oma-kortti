import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import Contactlist from './components/Contactlist.js';



export default function Contacts({contactInfo, navigation}) {
    const [search, onChangeText] = React.useState('');
    const [unit, setUnit] = React.useState(null);
    const logos = {'Luotsi': require('./luotsi.png'),
                  'Taitamo': require('./taitamo.png'),
                  'Ohjaamo': require('./ohjaamo.png'),
                  'default': require('./dunno.png')}
    if(unit == null) {
      return (
      <View style={styles.container}>
            {contactInfo.units.map(unit => printUnit(unit))}
      </View>) 
    }
    if(logos[unit] != undefined)
        logo = logos[unit];
      else
        logo = logos.default;
    return (
      <View style={styles.container}>
          <View style={styles.logoContainer}>         
              <Image style={styles.logo} source={logo}/> 
          </View>
          <View style={styles.searchContainer}>
              <View style={styles.search}>
                  <TextInput value={search} onChangeText={onChangeText} placeholder='search'></TextInput>
              </View>
          </View>
          <View style={styles.mainContainer}>
              <Contactlist contactInfo={contactInfo} navigation={navigation} contactFilter={(contact) => (contact.firstName.toLowerCase().includes(search.toLowerCase()) || contact.lastName.toLowerCase().includes(search.toLowerCase()))&&(unit == null || contact.unit == unit)} />
          </View>
          <Pressable style={styles.backButton} onPress={() => setUnit(null)}>
              <Ionicons name="arrow-back-circle-outline" size={styles.backButton.size} color="black" />
          </Pressable>
          <StatusBar style="auto" />
      </View>
    );
    function printUnit(unit){
      if(logos[unit] != undefined)
        logo = logos[unit];
      else
        logo = logos.default;
      return (
          <View style={styles.logoContainer}>
                  <Pressable style={styles.logo} onPress={() => setUnit(unit)}>
                    <Image style={styles.logo} source={logo}/>
                  </Pressable>
          </View> )
    }
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '65%',
    alignItems: 'center',
  },
  searchContainer: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    height: '20%',
    width: '90%',
    alignItems: 'center'
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'center'
  },
  ImageBackground: {
    flex: 1,
    resizeMode: "contain",
    width: "100%",
    alignItems: "center",
  },
  search: {
    backgroundColor: '#fff',
    width: '90%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#d8e9fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollview: {
    width: '100%',
    height: '100%'
  },
  backButton: {
    size: 48
  }
});
