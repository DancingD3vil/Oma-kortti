import { StyleSheet, Text, View } from 'react-native';
import Contact from './Contact.js'

export default function Contactlist( {contactlist} ) {
    len = contactlist.length;
    a = (
        <View style={styles.container}>
            {/*for(i = 0;i< len; i++)
                aaa(contact[i]);
    */}
            {aaa(contactlist[0])}
        </View>
    )
    return a
  }

  function aaa(contact){
    alert('abc')
    return <Contact contact={contact}/>
  }

  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#bbb',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
  });
