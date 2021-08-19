import React, {useContext,useState, useEffect } from 'react';
import {ActivityIndicator, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppNavContainer = () => {

    const [isAuthentificated, setIsAuthentificated] = useState(isLoggedIn);
    const [authLoaded, setAuthLoaded] = useState(false)
    const {authState: {isLoggedIn}} = useContext(GlobalContext);

    const getUser= async()=> {
        try {
            const user = await AsyncStorage.getItem('user');
            if(user){
                setAuthLoaded(true)
                setIsAuthentificated(true)
            }else{
                setAuthLoaded (true)
                 setIsAuthentificated(false)
            }
        } catch (e) {
        
        }
    }

    useEffect(() => {
        getUser() 
    }, [isLoggedIn])


    return (
        <>
        {authLoaded ?
        <NavigationContainer>
            {isAuthentificated ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer> : <ActivityIndicator /> }
        </>
    )
}

export default AppNavContainer;