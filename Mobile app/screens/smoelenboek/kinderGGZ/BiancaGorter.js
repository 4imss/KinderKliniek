import {Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { globalStyles } from '../../../styles/global';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";

const Bianca = ( { navigation }) => (
    <View style={globalStyles.container}>
        <ImageBackground
            source={require('../../../images/home/backgroundApp.png')}
            style={globalStyles.backgroundImage}>
            <Text style={globalStyles.titleSmoelenboek}>Bianca Gorter</Text>
            <View style={globalStyles.lineStaff}/>

            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={globalStyles.rowContainer}>
                <Image
                    style={globalStyles.imageStaff}
                    source={require('../../../images/employees/kinderGGZ/biancaGorter.png')}/>
                <Text style={globalStyles.titleStaff}>Bianca Gorter{"\n\n"}GZ-psycholoog en {"\n"}cognitief gedragstherapeut {"\n"}{"\n"}
                    Werkzaam bij DKK sinds{"\n"}september 2008
                </Text>
                <Text style={globalStyles.textStaff}>Mijn affiniteit is vooral gericht op traumagerichte behandeling (waaronder EMDR) en de inzet van
                    cognitief gedragstherapeutische behandeltechnieken bij bijvoorbeeld angst-, dwang- en/of
                    stemmingsproblematiek.{"\n"}{"\n"}
                    Leuk aan mijn werk bij DKK vind ik de grote afwisseling tussen de patienten,
                    de bijzondere sfeer die in DKK hangt en de laagdrempeligheid om contact met een ieder te kunnen hebben.
                    Tevens dat er veel ruimte wordt gegeven om eigen initiatieven te ontplooien.
                </Text>
                <View style={globalStyles.emailIcon}>
                    <Ionicons name="md-mail-open-outline" size={24} color='#C54D93' />
                    <Text style={globalStyles.emailStaff}>bgorter@dekinderkliniek.nl</Text>
                </View>
            </View>
            </ScrollView>
        </ImageBackground>
    </View>
);

export default Bianca;