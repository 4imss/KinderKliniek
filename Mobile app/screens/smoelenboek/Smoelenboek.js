import {ImageBackground, Text, View} from 'react-native';
import { globalStyles} from "../../styles/global";
import React from 'react';

const Smoelenboek = ( { navigation }) => (
    // List with all the catagories
    <View style={globalStyles.container}>
        <ImageBackground
            source={require('../../images/home/backgroundApp.png')}
            style={globalStyles.backgroundImage}>
                <Text style={globalStyles.titleSmoelenboek}>Smoelenboek</Text>
                <Text style={globalStyles.subtitle}>Kies een afdeling en maak kennis!</Text>
                <View style={globalStyles.lineSmoelenboek}/>
                <Text style={globalStyles.listFloors} onPress={() => navigation.navigate('KinderGGZSmoelenboek')}>KinderGGZ</Text>
                <Text style={globalStyles.listFloors}>Kinderartsen</Text>
                <Text style={globalStyles.listFloors}>Dagbehandeling</Text>
                <Text style={globalStyles.listFloors}>Diëtisten</Text>
                <Text style={globalStyles.listFloors}>Extern</Text>
                <Text style={globalStyles.listFloors}>Physician Assistant en verpleegkundigen</Text>
        </ImageBackground>
    </View>
);

export default Smoelenboek;
