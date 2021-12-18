import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { globalStyles } from '../../../styles/global';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";

const SimoneSormani = ( { navigation }) => (
    <View style={globalStyles.container}>
        <ImageBackground
            source={require('../../../images/home/backgroundApp.png')}
            style={globalStyles.backgroundImage}>
            <Text style={globalStyles.titleSmoelenboek}>Simone Sormani</Text>
            <View style={globalStyles.lineStaff}/>
            <View style={globalStyles.rowContainer}>
                <Image
                    style={globalStyles.imageStaff}
                    source={require('../../../images/employees/kinderGGZ/simoneSormani.png')}/>
                <Text style={globalStyles.titleStaff}>Simone Sormani{"\n\n"}
                    Orthopedagoog{"\n"}{"\n"}
                    Werkzaam bij DKK sinds{"\n"}november 2019
                </Text>
                <Text style={globalStyles.textStaff}>Mijn specialisatie is diagnostiek en behandeling bij kinderen/
                    jongeren van 6 t/m 18 jaar (o.a. ADHD, ASS, ANGST).
                    {"\n"}{"\n"}
                    Mijn lievelingsvakantie(land) is Indonesië, vanwege het heerlijke eten en de mooie natuur.
                </Text>
                <View style={globalStyles.emailIcon}>
                    <Ionicons name="md-mail-open-outline" size={24} color='#C54D93' />
                    <Text style={globalStyles.emailStaff}>ssormani@dekinderkliniek.nl</Text>
                </View>
            </View>
        </ImageBackground>
    </View>
);

export default SimoneSormani;