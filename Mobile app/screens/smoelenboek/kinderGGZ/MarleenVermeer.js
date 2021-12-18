import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { globalStyles } from '../../../styles/global';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";

const MarleenVermeer = ( { navigation }) => (
    <View style={globalStyles.container}>
        <ImageBackground
            source={require('../../../images/home/backgroundApp.png')}
            style={globalStyles.backgroundImage}>
            <Text style={globalStyles.titleSmoelenboek}>Marleen Scherjon-Vermeer</Text>
            <View style={globalStyles.lineStaff}/>
            <View style={globalStyles.rowContainer}>
                <Image
                    style={globalStyles.imageStaff}
                    source={require('../../../images/employees/kinderGGZ/marleenVermeer.png')}/>
                <Text style={globalStyles.titleStaff}>Marleen Scherjon-Vermeer{"\n\n"}Psychodiagnostisch{"\n"}medewerkster/{"\n"}
                    ouderbegeleidster{"\n"}{"\n"}
                    Werkzaam bij DKK sinds{"\n"}de start, al 15 jaar in almere!
                </Text>
                <Text style={globalStyles.textStaff}>Mijn specialisatie is de IMH doelgroep, dus jonge kinderen van 0 tot
                    6 jaar en ADHD.
                    {"\n"}{"\n"}
                    Mijn lievelingsvakantie(land) is Zuid-Afrika, in ieder geval waar veel cultuur en natuur aanwezig is
                    en je kan vissen, varen, wandelen en dieren kan zien.
                </Text>
                <View style={globalStyles.emailIcon}>
                    <Ionicons name="md-mail-open-outline" size={24} color='#C54D93' />
                    <Text style={globalStyles.emailStaff}>mvermeer@dekinderkliniek.nl</Text>
                </View>
            </View>
        </ImageBackground>
    </View>
);

export default MarleenVermeer;