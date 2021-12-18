import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { globalStyles } from '../../../styles/global';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";

const RozemarijnPagee = ( { navigation }) => (
    <View style={globalStyles.container}>
        <ImageBackground
            source={require('../../../images/home/backgroundApp.png')}
            style={globalStyles.backgroundImage}>
            <Text style={globalStyles.titleSmoelenboek}>Rozemarijn van Pagée</Text>
            <View style={globalStyles.lineStaff}/>
            <View style={globalStyles.rowContainer}>
                <Image
                    style={globalStyles.imageStaff}
                    source={require('../../../images/employees/kinderGGZ/rozemarijnPagée.png')}/>
                <Text style={globalStyles.titleStaff}>Rozemarijn van Pagée{"\n\n"}
                    Orthopedagoog-generalist, {"\n"}IMH-specialist{"\n"}{"\n"}
                    Werkzaam bij DKK sinds{"\n"}december 2017
                </Text>
                <Text style={globalStyles.textStaff}>Mijn specialisatie is: Infant Mental Health (0-6 jarigen).
                    {"\n"}{"\n"}
                    Mijn lievelingsvakantie is een reis naar een ver en warm land. Ik ga graag naar Azië.
                    Ik hou van sportieve vakanties, maar ik kan ook heerlijk genieten van de zon.
                </Text>
                <View style={globalStyles.emailIcon}>
                    <Ionicons name="md-mail-open-outline" size={24} color='#C54D93' />
                    <Text style={globalStyles.emailStaff}>rvpagee@dekinderkliniek.nl</Text>
                </View>
            </View>
        </ImageBackground>
    </View>
);

export default RozemarijnPagee;