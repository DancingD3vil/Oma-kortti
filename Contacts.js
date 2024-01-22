import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Contactlist from './components/Contactlist.js';

export default function Contacts({contactInfo}) {
    const [search, onChangeText] = React.useState('');
    return (
      <View style={styles.container}>
          <View style={styles.titleContainer}>
              <View style={styles.title}>
                  <TextInput value={search} onChangeText={onChangeText} placeholder='search'></TextInput>
              </View>
          </View>
          <View style={styles.mainContainer}>
              <Contactlist contactInfo={contactInfo} search={search}/>
          </View>
          <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '90%',
    backgroundColor: '#bbb',
    alignItems: 'center',
  },
  titleContainer: {
    backgroundColor: '#bbb',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navContainer: {
    backgroundColor: '#bbb',
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: '#fff',
    width: '90%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    backgroundColor: '#fff',
    width: '90%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aaa: {

  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});