import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import logo from '../../assets/images/logo.png';
import { REGISTER } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Messages from '../common/Messages';

const LoginComponent = ({onChange,error, onSubmit, loading, form, justSigneUp}) => {
    console.log('form',form)
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const { navigate } = useNavigation();
    return (
        <Container>
            <Image source={logo} style={styles.logoImage} />
            <View>
                <Text style={styles.title}>Welcome to RNContacts</Text>
                <Text style={styles.subTitle}>Please login here</Text>
                <View style={styles.form}>
                    {justSigneUp && (
                         <Messages 
                         onDimiss={() => {}}
                         retryFn={onSubmit} success message='Account created successfull' />
                    )}
                {error && !error?.error && (
                    <Messages 
                    onDimiss={() => {}}
                    retryFn={onSubmit} danger message='Invalid credentials' />
                )}
                    {error?.error && <Messages onDimiss
                retryFn={onSubmit} danger message={error?.error} />}
                    <Input
                        label="Username"
                        value={form.userName || null}
                        iconPosition="right"
                        placeholder="Enter Username"
                        onChangeText={(value) => onChange({name:'userName',value})}
                    />

                    <Input
                        label="Passwor d"
                        icon={
                        <TouchableOpacity onPress={() => {
                            setIsSecureEntry(prev=> !prev)
                        }}>
                            <Text>{isSecureEntry ? "Show" : 'Hide'}</Text>
                        </TouchableOpacity>}
                        iconPosition="right"
                        placeholder="Enter Password"
                        secureTextEntry={isSecureEntry}
                        onChangeText={(value) => onChange({name:'password',value})}
                    />

                    <CustomButton
                    loading={loading}
                    disabled={loading} 
                    onPress={onSubmit} 
                    primary title='Submit' />

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Need a new account ?</Text>
                        <TouchableOpacity onPress={() => { navigate(REGISTER) }}>
                            <Text style={styles.linkBtn}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    )
}

export default LoginComponent;
