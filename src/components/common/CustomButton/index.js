import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const CustomButton = ({ 
    title, loading, disabled,primary, secondary, danger, onPress }) => {
    const getBgColor = () => {
        if(disabled){
            return colors.grey
        }
        if(primary){
            return colors.primary
        };
        if (danger) {
            return colors.danger
        } 
        if (secondary) {
            return colors.secondary
        } 
    };

    const [focused, setFocused] = useState(false);

    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.wrapper,{backgroundColor:getBgColor()}]}>
            {/* {title && <Text style={{color:disabled ? "black" : colors.white}}>{title}</Text>} */}
            <View style={[styles.loaderSection]}>
               {loading && <ActivityIndicator color={primary ? colors.secondary :colors.primary} />} 
                   {title && <Text style={{color:disabled ? "black" : colors.white,paddingLeft:loading ? 5:0}}>{title}</Text>} 
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton;
