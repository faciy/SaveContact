import axiosInstance from '../../../helpers/axiosInstance';
import {REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_FAIL,CLEAR_AUTH_STATE} from '../../../constants/actionTypes';

export const clearAuthState= () =>dispatch=>{
    dispatch({
        type:CLEAR_AUTH_STATE,
    })
}

export default ({
    userName:username,
    firstName:first_name,
    lastName:last_name,
    email,
    password,
    }) =>(dispatch)=> (onSucess) => {
        dispatch({
            type:REGISTER_LOADING
        })
    axiosInstance.post('auth/register',{
    username,
    first_name,
    last_name,
    email,
    password,
    })
    .then((res) => {
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data,
        })
        onSucess(res.data);
    })
    .catch((err) => {
        dispatch({
            type:REGISTER_FAIL,
            payload: err.response ? err.response.data:{error:'Something went wrong, try again'},
        })
    })
}