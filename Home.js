import { SafeAreaView, ScrollView, StyleSheet, Text, View, } from 'react-native';
import contacts from './contacts.json';
import { Avatar, Icon } from 'react-native-elements';
import { StarOutlined, StarFilled} from '@ant-design/icons'

export default function Home() {
  const contactArray = []
  contactArray.push
  for (let i = 0; i < contacts.contacts.length; i++) {
    if (contacts.contacts[i].starred == false) {
      continue
    }
    else {
      contactArray.push(
        <View style={styles.membrane}>
          <Avatar rounded title="IC" activeOpacity={0} avatarStyle={{borderWidth:2,borderColor:'#000000'}} titleStyle={{color:'#000000'}} />
          <Text style={styles.mlegg}>{contacts.contacts[i].firstName} {contacts.contacts[i].lastName}</Text>
          <Text style={styles.mlegg}>{contacts.contacts[i].unit}</Text>
          <Icon name='rowing'/>
        </View>
      )
    }
  }
  return <SafeAreaView style={styles.chicken}><ScrollView style={styles.egg}>{contactArray}</ScrollView></SafeAreaView>
}
const styles = StyleSheet.create({
  chicken: {
    justifyContent: 'space-evenly',
  },
  egg: {
    
  },
  membrane:{
    justifyContent: 'space-evenly',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 50,
    borderColor: '#000000',
    alignItems: 'center'
    
  },
  avatar: {},
  mlegg: {fontSize: 20},
  icon: {fontSize: 50}
});