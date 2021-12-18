import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { globalStyles } from '../../../styles/global';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";

const CindyRustam = ( { navigation }) => (
    <View style={globalStyles.container}>
        <ImageBackground
            source={require('../../../images/home/backgroundApp.png')}
            style={globalStyles.backgroundImage}>
            <Text style={globalStyles.titleSmoelenboek}>Cindy Rustam</Text>
            <View style={globalStyles.lineStaff}/>
            <View style={globalStyles.rowContainer}>
                <Image
                    style={globalStyles.imageStaff}
                    source={require('../../../images/employees/kinderGGZ/cindyRustam.png')}/>
                <Text style={globalStyles.titleStaff}>Cindy Rustam{"\n\n"}Psycholisch medewerker{"\n"}en ouderbegeleider{"\n"}{"\n"}
                    Werkzaam bij DKK sinds{"\n"}2011
                </Text>

                <Text style={globalStyles.textStaff}>Mijn specialisatie is psychologische onderzoeken, begeleiding bij
                    studieproblemen ten gevolge van een psychiatrische aandoening of NAH en ouderbegeleiding.
                    {"\n"}{"\n"}
                    Leuk aan mijn werk bij DKK vind ik om met collega's in een team te werken waarin iedereen zijn
                    eigen specialisatie heeft. Mijn lievelingsvakantie(land) is Spanje en nog vele andere bestemmingen.
                </Text>
                <View style={globalStyles.emailIcon}>
                    <Ionicons name="md-mail-open-outline" size={24} color='#C54D93' />
                    <Text style={globalStyles.emailStaff}>crustam@dekinderkliniek.nl</Text>
                </View>
            </View>
        </ImageBackground>
    </View>
);

export default CindyRustam;