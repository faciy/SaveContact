import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
    item:{
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:20,
        alignItems:'center'
    },
    itemContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:20,
        alignItems:'center'
    },
    name:{
        fontSize:17
    },
    phoneNumber:{
        opacity:0.6,
        fontSize:14,
        paddingVertical:4
    },
    floatingActionButton:{
        backgroundColor:'red',
        width:55,
        height:55,
        position:'absolute',
        bottom:45,
        right:10,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    }
})