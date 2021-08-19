import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general';

const CreateContactComponent = () => {
    return (
        <View style={styles.container}>
            <Container>

            <Image 
            source={{uri:DEFAULT_IMAGE_URI}}
            style={styles.imageView}
            />
            <Text style={styles.chooseText}>Choose image</Text>
                <Input label="First name" placeholder="Enter First name"/>
                <Input label="Last name" placeholder="Enter Last name"/>
                <Input 
                icon={
                    <CountryPicker
                    withFilter
                    withFlag
                    withCountryNameButton={false}
                    withCallingCode
                    withEmoji
                    onSelect={() => {}}
                />
                }
                style={{paddingLeft:10}}
                iconPosition='left'
                label="Phone Number" 
                placeholder="Enter phone number"/>

                <CustomButton primary title="Submit" />
            </Container>
        </View>
    )
}

export default CreateContactComponent;
