import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { globalStyles } from '../../../styles/global';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";

const ChristaKleinepier = ( { navigation }) => (
    <View style={globalStyles.container}>
        <ImageBackground
            source={require('../../../images/home/backgroundApp.png')}
            style={globalStyles.backgroundImage}>
            <Text style={globalStyles.titleSmoelenboek}>Christa Kleinepier</Text>
            <View style={globalStyles.lineStaff}/>
            <View style={globalStyles.rowContainer}>
                <Image
                    style={globalStyles.imageStaff}
                    source={require('../../../images/employees/kinderGGZ/christaKleinepier.png')}/>
                <Text style={globalStyles.titleStaff}>Christa Kleinepier{"\n\n"}Klinisch psycholoog{"\n"}{"\n"}
                    Werkzaam bij DKK sinds{"\n"}oktober 2017
                </Text>

                <Text style={globalStyles.textStaff}>Mijn specialisatie is het werken met kinderen, jongeren en hun
                    ouders met complexe problematiek, waaronder onbegrepen lichamelijke klachten, autisme, angst,
                    stemmingsproblemen, diabetes, obstipatie, en nog veel meer. Zowel de diagnostiek als de behandeling
                    vind ik erg leuk om te doen.{"\n"}{"\n"}
                    Leuk aan mijn werk bij DKK vind ik de persoonlijke benadering, het gedreven en talentvolle team en
                    de diversiteit. Het samenwerken met verschillende disciplines doe ik graag en ik sta ook zeker open
                    voor overleg, dus neem gerust contact op!
                </Text>
                <View style={globalStyles.emailIcon}>
                    <Ionicons name="md-mail-open-outline" size={24} color='#C54D93' />
                    <Text style={globalStyles.emailStaff}>ckleinepier@dekinderkliniek.nl</Text>
                </View>
            </View>


        </ImageBackground>
    </View>
);

export default ChristaKleinepier;