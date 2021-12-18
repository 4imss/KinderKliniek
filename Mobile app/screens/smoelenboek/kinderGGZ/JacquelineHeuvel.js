import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { globalStyles } from '../../../styles/global';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";

const JacquelineHeuvel = ( { navigation }) => (
    <View style={globalStyles.container}>
        <ImageBackground
            source={require('../../../images/home/backgroundApp.png')}
            style={globalStyles.backgroundImage}>
            <Text style={globalStyles.titleSmoelenboek}>Jacqueline van den Heuvel</Text>
            <View style={globalStyles.lineStaff}/>
            <View style={globalStyles.rowContainer}>
                <Image
                    style={globalStyles.imageStaff}
                    source={require('../../../images/employees/kinderGGZ/jacquelineHeuvel.png')}/>
                <Text style={globalStyles.titleStaff}>Jacqueline van den Heuvel{"\n\n"}
                    Orthopedagoog{"\n"}{"\n"}
                    Werkzaam bij DKK sinds{"\n"}aug 2018
                </Text>
                <Text style={globalStyles.textStaff}>Ik voer zowel diagnotiek als behandeling uit en ben in het bezit
                    van een basiscursus CGT (Cognitieve Gedragstherapie). Sinds kort ben ik aangesloten bij het IMH-team
                    (Infant Mental Health).
                    {"\n"}{"\n"}
                    Leuk aan mijn werk bij DKK vind ik de variatie aan problematiek, aandacht voor het volledige systeem,
                    samenwerking met diverse disciplines en de gemoedelijke en gedreven werksfeer.
                </Text>
                <View style={globalStyles.emailIcon}>
                    <Ionicons name="md-mail-open-outline" size={24} color='#C54D93' />
                    <Text style={globalStyles.emailStaff}>jvdheuvel@dekinderkliniek.nl</Text>
                </View>
            </View>
        </ImageBackground>
    </View>
);

export default JacquelineHeuvel;