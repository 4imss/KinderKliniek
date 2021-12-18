import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { globalStyles } from '../../../styles/global';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";

const ChalaneBouwhuis = ({ navigation }) => (
    <View style={globalStyles.container}>
        <ImageBackground
            source={require('../../../images/home/backgroundApp.png')}
            style={globalStyles.backgroundImage}>
            <Text style={globalStyles.titleSmoelenboek}>Chalane Bouwhuis</Text>
            <View style={globalStyles.lineStaff}/>
            <View style={globalStyles.rowContainer}>
                <Image
                    style={globalStyles.imageStaff}
                    source={require('../../../images/employees/kinderGGZ/chalaneBouwhuis.png')}/>
                <Text style={globalStyles.titleStaff}>Chalane Bouwhuis{"\n\n"}GZ-psycholoog KJ{"\n"}{"\n"}
                    Werkzaam bij DKK sinds{"\n"}september 2019
                </Text>
                <Text style={globalStyles.textStaff}>Mijn specialisatie en ontwikkelings- en leerproblemen{"\n"}{"\n"}
                    Mijn lievelingsvakantie(land) is Italïe vanwege het lekkere eten, de wijn en ik er heerlijk kan windsurfen
                </Text>
                <View style={globalStyles.emailIcon}>
                    <Ionicons name="md-mail-open-outline" size={24} color='#C54D93' />
                    <Text style={globalStyles.emailStaff}>cbouwhuis@dekinderkliniek.nl</Text>
                </View>
            </View>
        </ImageBackground>
    </View>
);

export default ChalaneBouwhuis;