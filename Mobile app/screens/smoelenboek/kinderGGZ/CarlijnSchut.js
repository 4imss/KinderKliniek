import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { globalStyles } from '../../../styles/global';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const Carlijn = ( { navigation }) => (
    <View style={globalStyles.container}>
        <ImageBackground
            source={require('../../../images/home/backgroundApp.png')}
            style={globalStyles.backgroundImage}>
            <Text style={globalStyles.titleSmoelenboek}>Carlijn Schut</Text>
            <View style={globalStyles.lineStaff}/>
            <View style={globalStyles.rowContainer}>
                <Image
                    style={globalStyles.imageStaff}
                    source={require('../../../images/employees/kinderGGZ/carlijnSchut.png')}/>
                <Text style={globalStyles.titleStaff}>Carlijn Schut{"\n\n"}Psycholoog{"\n"}{"\n"}
                    Werkzaam bij DKK sinds{"\n"}april 2020
                </Text>
                <Text style={globalStyles.textStaff}>Mijn specialisatie is diagnostiek voor kinderen/jongeren van 6-18.{"\n"}{"\n"}
                    Mijn lievelingsvakantie(land) is Thailand. Hier heb ik tot mijn 8ste gewoond en voelt dus als thuiskomen.
                </Text>
                <View style={globalStyles.emailIcon}>
                    <Ionicons name="md-mail-open-outline" size={24} color='#C54D93' />
                    <Text style={globalStyles.emailStaff}>cschut@dekinderkliniek.nl</Text>
                </View>
            </View>
        </ImageBackground>
    </View>
);

export default Carlijn;