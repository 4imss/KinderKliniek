import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { globalStyles } from '../../../styles/global';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";

const MarijkeHeijden = ( { navigation }) => (
    <View style={globalStyles.container}>
        <ImageBackground
            source={require('../../../images/home/backgroundApp.png')}
            style={globalStyles.backgroundImage}>
            <Text style={globalStyles.titleSmoelenboek}>Marijke van der Heijden</Text>
            <View style={globalStyles.lineStaff}/>
            <View style={globalStyles.rowContainer}>
                <Image
                    style={globalStyles.imageStaff}
                    source={require('../../../images/employees/kinderGGZ/marijkeHeijden.png')}/>
                <Text style={globalStyles.titleStaff}>Marijke van der Heijden{"\n\n"}GZ-psycholoog{"\n"}{"\n"}
                    Werkzaam bij DKK sinds{"\n"}februari 2018
                </Text>
                <Text style={globalStyles.textStaff}>Mijn specialisatie is autisme en jonge kinderen.
                    {"\n"}{"\n"}
                    Mijn lievelingsvakantie(land) is Azië. In de zomer van 2018 ben ik met mijn gezin daar 7 weken op
                    reis geweest. Heerlijke temperatuur, lekker eten, mooie stranderen snorkelen enz!
                </Text>
                <View style={globalStyles.emailIcon}>
                    <Ionicons name="md-mail-open-outline" size={24} color='#C54D93' />
                    <Text style={globalStyles.emailStaff}>mvdheijden@dekinderkliniek.nl</Text>
                </View>
            </View>
        </ImageBackground>
    </View>
);

export default MarijkeHeijden;