import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { globalStyles } from '../../../styles/global';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";

const MariekeDonders = ( { navigation }) => (
    <View style={globalStyles.container}>
        <ImageBackground
            source={require('../../../images/home/backgroundApp.png')}
            style={globalStyles.backgroundImage}>
            <Text style={globalStyles.titleSmoelenboek}>Marieke Donders</Text>
            <View style={globalStyles.lineStaff}/>
            <View style={globalStyles.rowContainer}>
                <Image
                    style={globalStyles.imageStaff}
                    source={require('../../../images/employees/kinderGGZ/mariekeDonders.png')}/>
                <Text style={globalStyles.titleStaff}>Marieke Donders{"\n\n"}GZ-psycholoog K&J{"\n"}{"\n"}
                    Werkzaam bij DKK sinds{"\n"}de opening
                </Text>
                <Text style={globalStyles.textStaff}>Mijn specialisatie is Trauma, MBCT. Ik werk daarnaast 3 dagen als
                    studentpsycholoog bij Codarts hogeschool voor de kunsten in Rotterdam.
                    {"\n"}{"\n"}
                    Leuk aan mijn werk bij DKK vind ik de speelsheid en creativiteit van het werk en bedrijf.
                </Text>
                <View style={globalStyles.emailIcon}>
                    <Ionicons name="md-mail-open-outline" size={24} color='#C54D93' />
                    <Text style={globalStyles.emailStaff}>mdonders@dekinderkliniek.nl</Text>
                </View>
            </View>
        </ImageBackground>
    </View>
);

export default MariekeDonders;