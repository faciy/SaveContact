import React, { useState, useContext, useEffect } from 'react';
import LoginComponent from '../../components/Login';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GlobalContext } from '../../context/Provider';
import loginUser from '../../context/actions/auth/loginUser';


const Login = ({route}) => {
    console.log('route',route)
    const {params} = useRoute();
    const [justSigneUp, setJustSigneUp] = useState(false)
    const [form, setForm] = useState({});

    useEffect(() => {
        if(params?.data){
            setJustSigneUp(true)
            setForm({...form, userName:params.data.username})
        }
    }, [params])

    const {navigate} = useNavigation();
    const {authDispatch, authState:{error,loading,isLoggedIn}} = useContext(GlobalContext);

    const onSubmit = () => {
        if(form.userName && form.password){
            loginUser(form)(authDispatch)
        }
    }

    const onChange = ({name,value}) => {
        setJustSigneUp(false)
        setForm({...form, [name]:value})
    }

    return (
        <LoginComponent 
        onSubmit={onSubmit} 
        onChange={onChange}
        form={form} 
        error={error}
        loading={loading} 
        justSigneUp={justSigneUp}
        />
    );
};

export default Login;