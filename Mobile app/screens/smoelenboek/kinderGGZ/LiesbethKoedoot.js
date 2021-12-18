import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { globalStyles } from '../../../styles/global';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";

const LiesbethKoedoot = ( { navigation }) => (
    <View style={globalStyles.container}>
        <ImageBackground
            source={require('../../../images/home/backgroundApp.png')}
            style={globalStyles.backgroundImage}>
            <Text style={globalStyles.titleSmoelenboek}>Liesbeth Koedoot</Text>
            <View style={globalStyles.lineStaff}/>
            <View style={globalStyles.rowContainer}>
                <Image
                    style={globalStyles.imageStaff}
                    source={require('../../../images/employees/kinderGGZ/liesbethKoedoot.png')}/>
                <Text style={globalStyles.titleStaff}>Liesbeth Koedoot{"\n\n"}GZ-psycholoog{"\n"}{"\n"}
                    Werkzaam bij DKK sinds{"\n"}september 2008
                </Text>
                <Text style={globalStyles.textStaff}>Mijn specialisatie is IMH, ASS.
                    {"\n"}{"\n"}
                    Mijn lievelingsvakanties zijn wintersportvakanties, omdat ik gek ben op snowboarden en daarnaast
                    hou ik er van om de wereld rond te reizen, om andere landen en culturen te ontdekken en leren kennen.
                </Text>
                <View style={globalStyles.emailIcon}>
                    <Ionicons name="md-mail-open-outline" size={24} color='#C54D93' />
                    <Text style={globalStyles.emailStaff}>lkoedoot@dekinderkliniek.nl</Text>
                </View>
            </View>
        </ImageBackground>
    </View>
);

export default LiesbethKoedoot;