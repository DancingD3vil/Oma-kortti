import { Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import UserAvatar from 'react-native-user-avatar';


export default function Contact( {contact, contactInfo, navigation, contactStyle} ) {
  const [isStarred, setIsStarred] = useState(contactInfo.starredContacts.starredContacts.includes(contact['id']));
  function save(contact, contactInfo){
    starredContacts = contactInfo.starredContacts;
    if(starredContacts.starredContacts.includes(contact.id)){
      setIsStarred(false);
      starredContacts.starredContacts = starredContacts.starredContacts.filter((id) => id != contact.id);
      contactInfo.setStarredContacts(starredContacts);
      contactInfo.saveStarredContacts();
    }
    else{
      setIsStarred(true);
      starredContacts.starredContacts.push(contact.id);
      contactInfo.setStarredContacts(starredContacts);
      contactInfo.saveStarredContacts();
    }
  }
  if(isStarred)
      starred = <MaterialCommunityIcons style={contactStyle.star} name="star-face" color="#f5e030" />;
  else
      starred = <MaterialCommunityIcons style={contactStyle.star} name="star-outline" color="#a6a6a6" />;
  return (
  <View>
    <View style={contactStyle.container}>
        <View style={contactStyle.avatarcontainer}><Pressable style={contactStyle.avatar} onPress={()=>{contactInfo.setZoomedContact(contact.id);navigation.navigate('Zoom');}}><UserAvatar size={contactStyle.avatar.size} style={contactStyle.avatar} src={contact.avatar} name={contact['firstName'] + ' ' + contact['lastName']} /></Pressable></View>
        <View style={contactStyle.info}>
          <Text>{contact['firstName'] + ' ' + contact['lastName']}</Text>
          <Text>{contact['unit']}</Text>
          <Text>{contact['email']}</Text>
          <Text>{contact['phone']}</Text>
        </View>
        <View style={contactStyle.starcontainer}>
          <Pressable style={contactStyle.star} onPress={() => save(contact, contactInfo)}>{starred}</Pressable>
        </View>
    </View>
    <View style={contactStyle.separator}/>
  </View>
  );
}
