import {Text,FlatList } from 'react-native';
import React from 'react';
import { user } from './userContactInfo';
import ContactItem from '../../components/ContactItem';
import { styles } from './style';
const ContactListScreen = () => {
    const renderItem=({item})=> 
    <ContactItem 
        name={item.name} 
        email={item.email}
    />;
  return (
   <FlatList
    data={user}
    renderItem={renderItem}
    keyExtractor={(item)=>item.id}
    contentContainerStyle={styles.list}
    ListHeaderComponent={<Text style={styles.heading}>Contacts</Text>}
   />
  );
};

export default ContactListScreen