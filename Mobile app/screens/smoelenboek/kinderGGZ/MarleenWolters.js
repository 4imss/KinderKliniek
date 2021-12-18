import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { globalStyles } from '../../../styles/global';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";

const MarleenWolters = ( { navigation }) => (
    <View style={globalStyles.container}>
        <ImageBackground
            source={require('../../../images/home/backgroundApp.png')}
            style={globalStyles.backgroundImage}>
            <Text style={globalStyles.titleSmoelenboek}>Marleen Wolters</Text>
            <View style={globalStyles.lineStaff}/>
            <View style={globalStyles.rowContainer}>
                <Image
                    style={globalStyles.imageStaff}
                    source={require('../../../images/employees/kinderGGZ/marleenWolters.png')}/>
                <Text style={globalStyles.titleStaff}>Marleen Wolters{"\n\n"}Psycholoog{"\n"}{"\n"}
                    Werkzaam bij DKK sinds{"\n"}2017
                </Text>
                <Text style={globalStyles.textStaff}>Momenteel ben ik in opleiding tot GZ-psycholoog. Ik verwacht de
                    opleiding in 2022 afgerond te hebben.
                    {"\n"}{"\n"}
                    Mijn lievelingsvakantie(land) is (zonder twijfel) Zuid-Afrika. Een paar jaar terug heb ik hier met
                    veel plezier een half jaar gestudeerd.
                </Text>
                <View style={globalStyles.emailIcon}>
                    <Ionicons name="md-mail-open-outline" size={24} color='#C54D93' />
                    <Text style={globalStyles.emailStaff}>mwolters@dekinderkliniek.nl</Text>
                </View>
            </View>
        </ImageBackground>
    </View>
);

export default MarleenWolters;