import React, {useState, useContext, useEffect} from 'react';
import RegisterComponent from '../../components/Signup';
import register, { clearAuthState } from '../../context/actions/auth/register';
import { GlobalContext } from '../../context/Provider';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { LOGIN } from '../../constants/routeNames';

const Register = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const {navigate} = useNavigation();
    const {authDispatch, authState:{error,loading,data}} = useContext(GlobalContext);

    useFocusEffect(
        React.useCallback(() => {
            return() => {
                 if(data || error){
                    clearAuthState()(authDispatch);
                }
            }
        }, [data, error])
      );
    

    const onChange = ({name,value}) => {
        setForm({...form, [name]:value});
        
        if(value !== ''){
            if(name === 'password'){
                if(value.length < 6){
                    setErrors((prev) => {
                        return {...prev, [name]:'The field Needs min 6 characters'}
                    })
                }else{
                    setErrors((prev) => {
                        return {...prev,[name]:null}
                    })
                }
            }else{
                setErrors((prev) => {
                    return {...prev,[name]:null}
                })
            }
            setErrors((prev) => {
                return {...prev,[name]:null}
            })
        }else{
            setErrors((prev) => {
                return {...prev,[name]:'The field is required '}
            })
        }

        
    }

    const onSubmit = () => {
        if(!form.userName){
            setErrors((prev) => {
                return {...prev,userName:'Please add a userName'}
            })
        }
        if(!form.firstName){
            setErrors((prev) => {
                return {...prev,firstName:'Please add a firstName'}
            })
        }
        if(!form.lastName){
            setErrors((prev) => {
                return {...prev,lastName:'Please add a lastName'}
            })
        }
        if(!form.email){
            setErrors((prev) => {
                return {...prev,email:'Please add a email'}
            })
        }
        if(!form.password){
            setErrors((prev) => {
                return {...prev,password:'Please add a password'}
            })
        }
        if(Object.values(form).length === 5 &&
          Object.values(form).every(item => item.trim().length > 0) &&
          Object.values(errors).every(item => !item)
          ){
            register(form)(authDispatch)((response) => {
                navigate(LOGIN, {data:response});
            });
        }
    }

    return(
        <RegisterComponent 
        onSubmit={onSubmit} 
        onChange={onChange}
        form={form} 
        errors={errors} 
        error={error}
        loading={loading}
        />
    );
};

export default Register;