import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { globalStyles } from '../../../styles/global';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";

const JacquelineRodenburg = ( { navigation }) => (
    <View style={globalStyles.container}>
        <ImageBackground
            source={require('../../../images/home/backgroundApp.png')}
            style={globalStyles.backgroundImage}>
            <Text style={globalStyles.titleSmoelenboek}>Jacqueline Rodenburg</Text>
            <View style={globalStyles.lineStaff}/>
            <View style={globalStyles.rowContainer}>
                <Image
                    style={globalStyles.imageStaff}
                    source={require('../../../images/employees/kinderGGZ/jacquelineRodenburg.png')}/>
                <Text style={globalStyles.titleStaff}>Jacqueline Rodenburg{"\n\n"}Systeemtherapeut{"\n"}{"\n"}
                    Werkzaam bij DKK sinds{"\n"}2018
                </Text>
                <Text style={globalStyles.textStaff}>Mijn specialisatie is Geweldloos verzet en EFT (emotional focused
                    therapy) en ABFT (attachment bases family therapy).
                    {"\n"}{"\n"}
                    Leuk aan mijn werk bij DKK vind ik de ontspannen sfeer, de variatie in de caseload en het multi-
                    disciplinair karakter, omdat we hierdoor zorgvuldig en laagdrempelig passende hulp kunnen bieden
                    of doorverwijzen naar waar nodig!
                </Text>
                <View style={globalStyles.emailIcon}>
                    <Ionicons name="md-mail-open-outline" size={24} color='#C54D93' />
                    <Text style={globalStyles.emailStaff}>jrodenburg@dekinderkliniek.nl</Text>
                </View>
            </View>


        </ImageBackground>
    </View>
);

export default JacquelineRodenburg;