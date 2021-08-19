import React, {useEffect, useState, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from '../../components/common/Icon';
import ContactsComponent from '../../components/ContactsComponent';
import {GlobalContext} from '../../context/Provider';
import getContacts from '../../context/actions/contacts/getContacts';


const Contacts = () => {

    const {setOptions, toggleDrawer} = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const {contactsDispatch, contactsState: {getContacts : {data, loading}}, } = useContext(GlobalContext);

    useEffect(() => {
        getContacts()(contactsDispatch)
    }, [])


    useEffect(() => {
         setOptions({headerLeft:() => 
        <TouchableOpacity onPress={() => {
            toggleDrawer ();
        }}>
            <Icon type="material" size={25} name="menu" style={{padding:10}}/>
        </TouchableOpacity>
        })
    }, [])

    return(
        <ContactsComponent
        data={data}
        loading={loading} 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible} />
    );
};

export default Contacts;