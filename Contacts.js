import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import contacts from './contacts.json';
import Contactlist from './components/Contactlist.js';

export default function Contacts() {
    return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <View style={styles.title}>
                <Text>Title</Text>
            </View>
        </View>
        <View style={styles.navContainer}>
            <View style={styles.nav}>
                <Text>Navi</Text>
            </View>
        </View>
        <View style={styles.mainContainer}>
            <Contactlist contactlist={contacts['contacts']} />
        </View>
        <StatusBar style="auto" />
    </View>
    );
  }

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '80%',
    backgroundColor: '#bbb',
    alignItems: 'center',
  },
  titleContainer: {
    backgroundColor: '#bbb',
    width: '100%',
    height: '10%',
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