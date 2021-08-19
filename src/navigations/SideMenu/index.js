import React from 'react'
import { View, Alert, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import Container from '../../components/common/Container';
import logo from '../../assets/images/logo.png';
import styles from './styles';
import { SETTINGS } from '../../constants/routeNames';
import logoutUser from '../../context/actions/auth/logoutUser';
import Icon from '../../components/common/Icon';

const SideMenu = ({ navigation, authDispatch }) => {

    const handleLogout = () => {
        navigation.toggleDrawer();
        Alert.alert("Logout","Are you sure you want to logout ? ",[
            {
                text:"Cancel",
                onPress: ( ) => {}
            },
            {
                text:"Ok",
                onPress: () => {
                    logoutUser()(authDispatch)
                }
            }
    ])
    }

    const MenuItems = [
        { icon: <Icon type="fontisto" size={17} name='player-settings'></Icon>, 
        name: "Settings", 
        onPress:() => {
            navigation.navigate(SETTINGS);
        } },
        { icon: <Icon type="material" size={17} name='logout'></Icon>, 
          name: "Logout",
          onPress:() => {handleLogout()}
         },
    ]

    return (
        <SafeAreaView>
            <Container>
                <Image source={logo} style={styles.logoImage} />
                <View style={{paddingHorizontal:70}}>
                    {MenuItems.map(({ name, icon, onPress }) => {
                        return (
                            <TouchableOpacity onPress={onPress} style={styles.item} key={name}>
                                {icon}
                                <Text style={styles.itemText}>{name}</Text> 
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </Container>
        </SafeAreaView>
    )
}

export default SideMenu;
