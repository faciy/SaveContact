import React from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image } from 'react-native'
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal';
import CustomButton from '../common/CustomButton';
import Message from '../common/Messages';
import portrait from '../../assets/images/portrait.jpeg';
import { useNavigation } from '@react-navigation/native';
import Icon from '../common/Icon';
import styles from './styles';
import { CREATE_CONTACT } from '../../constants/routeNames';

const ContactsComponent = ({ modalVisible, setModalVisible, data, loading }) => {

    const { navigate } = useNavigation();

    const ListEmptyComponent = () => {
        return (
            <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
                <Message info message="No contacts to show" />
            </View>
        )
    }

    const renderItem = ({ item }) => {
        const { contact_picture, first_name, last_name, phone_number, country_code } = item;

        return (
            <TouchableOpacity style={styles.itemContainer}>
                <View style={styles.item}>
                    {contact_picture ? <Image style={{ width: 45, height: 45, borderRadius: 100 }} source={portrait} /> : <View style={{ width: 45, height: 45, backgroundColor: colors.grey , flexDirection:'row', alignItems:'center', justifyContent:'center', borderRadius:100}}>
                        <Text style={[styles.name, {color:colors.white}]}>{first_name[0]}</Text>
                        <Text style={[styles.name, {color:colors.white}]}>{last_name[0]}</Text>
                        </View>}

                    <View style={{paddingLeft:20}}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>{first_name}</Text>
                            <Text style={styles.name}> {last_name}</Text>
                        </View>
                        <Text style={styles.phoneNumber}>{`${country_code} ${phone_number}` }</Text>
                    </View>
                </View>
                <Icon name="right" type="ant" size={18} color={colors.grey} />
            </TouchableOpacity>
        )
    }

    return (
        <>
        <View style={{ backgroundColor: colors.white }}>
            <AppModal
                modalBody={<View>
                    <Text>Hello from the modal</Text>
                </View>}
                modalFooter={<></>}
                title="My Profile"
                setModalVisible={setModalVisible}
                modalVisible={modalVisible} />

            {/* <CustomButton 
            secondary
            title='Open Modal'
            onPress={() => {
                setModalVisible(true)
            }}/> */}

            {loading &&
                <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
                    <ActivityIndicator color={colors.primary} size="large" />
                </View>
            }

            {!loading && (
                <View style={[{ paddingVertical: 20 }]}>
                    <FlatList
                        data={data}
                        ItemSeparatorComponent={() => (
                            <View style={{height:0.5,backgroundColor:colors.grey}}></View>
                        )}
                        renderItem={renderItem}
                        keyExtractor={(item) => String(item.id)}
                        ListEmptyComponent={ListEmptyComponent}
                        ListFooterComponent={<View style={{ height: 100 }}></View>}
                    />
                </View>
            )
            }
        </View>
        <TouchableOpacity style={styles.floatingActionButton} 
        onPress={() => {navigate(CREATE_CONTACT)}}>
            <Icon name="plus" color={colors.white } size={21} />
        </TouchableOpacity>
        </>
    )
}

export default ContactsComponent;
