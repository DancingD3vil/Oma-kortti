import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Contactlist from './components/Contactlist.js';

export default function Contacts({contactInfo, navigation}) {
    const [search, onChangeText] = React.useState('');
    const [unit, setUnit] = React.useState(null);
    return (
      <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Text>{unit}</Text>
          </View>
          <View style={styles.searchContainer}>
              <View style={styles.search}>
                  <TextInput value={search} onChangeText={onChangeText} placeholder='search'></TextInput>
              </View>
          </View>
          <View style={styles.mainContainer}>
              <Contactlist contactInfo={contactInfo} navigation={navigation} contactFilter={(contact) => (contact.firstName.toLowerCase().includes(search.toLowerCase()) || contact.lastName.toLowerCase().includes(search.toLowerCase()))&&(unit == null || contact.unit == unit)} />
          </View>
          <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '90%',
    alignItems: 'center',
  },
  searchContainer: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    height: 'auto',
    width: '100%',
    alignItems: 'center'
  },
  search: {
    backgroundColor: '#fff',
    width: '90%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#d8e9fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
