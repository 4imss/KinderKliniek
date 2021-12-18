import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { globalStyles } from '../../../styles/global';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";

const MarlousBouman = ( { navigation }) => (
    <View style={globalStyles.container}>
        <ImageBackground
            source={require('../../../images/home/backgroundApp.png')}
            style={globalStyles.backgroundImage}>
            <Text style={globalStyles.titleSmoelenboek}>Marlous Bouman</Text>
            <View style={globalStyles.lineStaff}/>
            <View style={globalStyles.rowContainer}>
                <Image
                    style={globalStyles.imageStaff}
                    source={require('../../../images/employees/kinderGGZ/marlousBouman.png')}/>
                <Text style={globalStyles.titleStaff}>Marlous Bouman{"\n\n"}GZ-psycholoog K&J{"\n"}{"\n"}
                    Werkzaam bij DKK sinds{"\n"}2016
                </Text>
                <Text style={globalStyles.textStaff}>Mijn specialisatie is SOLK, trauma en pubers.
                    {"\n"}{"\n"}
                    Leuk aan mijn werk bij DKK vind ik de diversiteit aan cliënten en het samenwerken met collega's
                    DKK breed, omdat ik graag uitgedaagd word en het een meerwaarde vind om van elkaar te kunnen leren.
                </Text>
                <View style={globalStyles.emailIcon}>
                    <Ionicons name="md-mail-open-outline" size={24} color='#C54D93' />
                    <Text style={globalStyles.emailStaff}>mbouman@dekinderkliniek.nl</Text>
                </View>
            </View>
        </ImageBackground>
    </View>
);

export default MarlousBouman;