import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import contacts from './contacts.json';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>Home</Text>
        </View>
        <View style={styles.main}>
          <Text>navigation</Text>
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
