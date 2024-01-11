import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Link} from "react-router-dom";
import contacts from './contacts.json';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>AssAss</Text>
        </View>
        <View style={styles.main}>
          <Text>{JSON.stringify(contacts)}</Text>
        </View>
        <View style={styles.main}>
          <Link to="/Home"> Home </Link>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 0.8,
    backgroundColor: '#fff',
  },
  title: {
    flex: 0.2,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
