import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { globalStyles } from '../../../styles/global';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";

const DianaRenardus = ( { navigation }) => (
    <View style={globalStyles.container}>
        <ImageBackground
            source={require('../../../images/home/backgroundApp.png')}
            style={globalStyles.backgroundImage}>
            <Text style={globalStyles.titleSmoelenboek}>Diana Renardus</Text>
            <View style={globalStyles.lineStaff}/>
            <View style={globalStyles.rowContainer}>
                <Image
                    style={globalStyles.imageStaff}
                    source={require('../../../images/employees/kinderGGZ/dianaRenardus.png')}/>
                <Text style={globalStyles.titleStaff}>Diana Renardus{"\n\n"}GZ-psycholoog{"\n"}{"\n"}
                    Werkzaam bij DKK sinds{"\n"}jan 2020
                </Text>

                <Text style={globalStyles.textStaff}>Mijn specialisatie is Angst-, Stemmingsstoornissen, Trauma,
                    Intercultureel sensitief.
                    {"\n"}{"\n"}
                    Mijn lievelingsvakantie(land) is Suriname, omdat daar mijn roots liggen en het een bijzonder
                    mooie natuur heeft met tropische temperaturen, exotische flora en fauna en een verscheidenheid heeft
                    aan culturen en etniciteiten.
                </Text>
                <View style={globalStyles.emailIcon}>
                    <Ionicons name="md-mail-open-outline" size={24} color='#C54D93' />
                    <Text style={globalStyles.emailStaff}>drenardus@dekinderkliniek.nl</Text>
                </View>
            </View>
        </ImageBackground>
    </View>
);

export default DianaRenardus;