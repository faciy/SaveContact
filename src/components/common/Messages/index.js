import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Messages = ({ 
    message,primary, danger, info, success, retry, retryFn, onDimiss   }) => {
        const [useDismissed, setUseDismissed] = useState(false)
    const getBgColor = () => {
        if(primary){
            return colors.primary
        };
        if (danger) {
            return colors.danger
        } 
        if (success) {
            return colors.success
        } 
        if (info) {
            return colors.secondary 
        } 
    };

    return (
        <>
        {useDismissed?null: 
        <TouchableOpacity style={[styles.wrapper,{backgroundColor:getBgColor()}]}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color:colors.white}}>{message}</Text> 
                    <TouchableOpacity onPress={retryFn}>
                        {retry&& !typeof onDimiss==="function" &&<Text style={{color:colors.white}}>retry</Text>}
                    </TouchableOpacity>

                    {typeof onDimiss==="function"&& 
                    <TouchableOpacity onPress={() => {
                        setUseDismissed(true);
                        onDimiss()
                    }}>
                        <Text style={{color:colors.white}}>X</Text>
                    </TouchableOpacity>
                    }
            </View>
        </TouchableOpacity>}
    </>
    )
}

export default Messages;
