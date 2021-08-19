import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import logo from '../../assets/images/logo.png';
import { LOGIN } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Messages from '../common/Messages';

const RegisterComponent = ({onSubmit, onChange, form, error, loading, errors}) => {
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const { navigate } = useNavigation();
    return (
        <Container>
            <Image source={logo} style={styles.logoImage} />
            <View>
                <Text style={styles.title}>Welcome to RNContacts</Text>
                <Text style={styles.subTitle}>Create a free account</Text>
                <View style={styles.form}>
                    {error?.error&& <Messages 
                    danger
                    retry 
                    retryFn={() => {
                        console.log('111111',11111)
                    }} 
                    message={error?.error}
                    />}
                    <Input
                        label="Username"
                        iconPosition="right"
                        placeholder="Enter Username"
                        onChangeText={(value) => onChange({name:'userName',value})}
                        error={errors.userName || error?.username?.[0]}
                    />

                    <Input
                        label="First Name"
                        iconPosition="right"
                        placeholder="Enter First name"
                        onChangeText={(value) => onChange({name:'firstName',value})}
                        error={errors.firstName  || error?.first_name?.[0]}
                    />

                    <Input
                        label="Last Name"
                        iconPosition="right"
                        placeholder="Enter Last name"
                        onChangeText={(value) => onChange({name:'lastName',value})}
                        error={errors.lastName || error?.last?.[0]}
                    />

                    <Input
                        label="Email"
                        iconPosition="right"
                        placeholder="Enter Email"
                        onChangeText={(value) => onChange({name:'email',value})}
                        error={errors.email || error?.email?.[0]}
                    />

                    <Input
                        label="Password"
                        icon={
                            <TouchableOpacity onPress={() => {
                                setIsSecureEntry(prev=> !prev)
                            }}>
                                <Text>{isSecureEntry ? "Show" : 'Hide'}</Text>
                            </TouchableOpacity>}
                        iconPosition="right"
                        placeholder="Enter Password"
                        onChangeText={(value) => onChange({name:'password',value})}
                        secureTextEntry={isSecureEntry}
                        error={errors.password}
                    />
                    <CustomButton disabled={loading} loading={loading} onPress={onSubmit} primary title='Submit' />

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Already have a account ?</Text>
                        <TouchableOpacity onPress={() => { navigate(LOGIN) }}>
                            <Text style={styles.linkBtn}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    )
}

export default RegisterComponent;
