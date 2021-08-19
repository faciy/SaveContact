import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
     wrapper: {
        height:50,
        borderRadius:4,
        paddingHorizontal:10,
        paddingVertical:13,
        marginVertical:5,
    },
    textInput:{
        flex:1,
        width:'100%'
    },
    loaderSection:{
        flexDirection:'row'
    },
    error:{
        color:colors.danger,
        paddingTop:4,
        fontSize:12
    }
})