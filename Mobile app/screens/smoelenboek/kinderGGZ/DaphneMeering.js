import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { globalStyles } from '../../../styles/global';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";

const DaphneMeering = ( { navigation }) => (
    <View style={globalStyles.container}>
        <ImageBackground
            source={require('../../../images/home/backgroundApp.png')}
            style={globalStyles.backgroundImage}>
            <Text style={globalStyles.titleSmoelenboek}>Daphne Meering</Text>
            <View style={globalStyles.lineStaff}/>
            <View style={globalStyles.rowContainer}>
                <Image
                    style={globalStyles.imageStaff}
                    source={require('../../../images/employees/kinderGGZ/daphneMeering.png')}/>
                <Text style={globalStyles.titleStaff}>Daphne Meering{"\n\n"}Psycholoog i.o.t. GZ-psycholoog{"\n"}{"\n"}
                    Werkzaam bij DKK sinds{"\n"}2016
                </Text>

                <Text style={globalStyles.textStaff}>Mijn specialisatie is neuropsychologie.
                    {"\n"}{"\n"}
                    Mijn lievelingsvakantie(land) is Zuid-Afrika! Een perfecte combinatie tussen zonnig weer en genoeg
                    activiteiten; de nationale wild-life parken en wijngaarden zijn mijn favorieten.
                </Text>
                <View style={globalStyles.emailIcon}>
                    <Ionicons name="md-mail-open-outline" size={24} color='#C54D93' />
                    <Text style={globalStyles.emailStaff}>dmeering@dekinderkliniek.nl</Text>
                </View>
            </View>
        </ImageBackground>
    </View>
);

export default DaphneMeering;