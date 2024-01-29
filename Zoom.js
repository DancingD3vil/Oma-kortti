import { View, Text, StyleSheet } from "react-native";
import UserAvatar from 'react-native-user-avatar';

export default function Zoom({contactInfo}){
    contact = contactInfo.contacts.find((contact) => contact.id == contactInfo.zoomedContact);
    return <View style={StyleSheet.container}>
                <UserAvatar size={256} style={styles.avatar} src={contact.avatar} name={contact['firstName'] + ' ' + contact['lastName']} />
                <Text style={styles.name}>{contact.firstName + ' ' + contact.lastName}</Text>
                <Text style={styles.unit}>{contact.unit}</Text>
                <Text style={styles.phone}>{contact.phone}</Text>
                <Text style={styles.email}>{contact.email}</Text>
            </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        width: '100%',
        height: 'auto',
        borderBottomWidth: 5,
        borderColor: '#bbc'
    },
    avatar: {
        height: 256,
        width: 256,
        alignSelf: 'center',
      },
    name: {
        fontSize: 32,
        alignSelf: 'center',
    },
    unit: {
        fontSize: 32,
        alignSelf: 'center',
    },
    phone: {
        fontSize: 32,
        alignSelf: 'center',
    },
    email: {
        fontSize: 32,
        alignSelf: 'center',
    }
  });