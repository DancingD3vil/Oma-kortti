import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Contactlist from './components/Contactlist.js';

export default function Contacts({contactInfo, navigation}) {
    const [search, onChangeText] = React.useState('');
    return (
      <View style={styles.container}>
          <View style={styles.searchContainer}>
              <View style={styles.search}>
                  <TextInput value={search} onChangeText={onChangeText} placeholder='search'></TextInput>
              </View>
          </View>
          <View style={styles.mainContainer}>
              <Contactlist contactInfo={contactInfo} search={search} navigation={navigation}/>
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