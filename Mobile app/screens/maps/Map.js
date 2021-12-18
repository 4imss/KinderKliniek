import {Text, TouchableOpacity, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import {globalStyles} from "../../styles/global";



const MyComponent = ( { navigation }) => (
    // Layout //
    <View style={globalStyles.container}>
        <ImageBackground
            source={require('../../images/home/backgroundApp.png')}
            style={globalStyles.backgroundImage}>
            <Text style={globalStyles.title}>
            Wegwijzer
            </Text>
            <Text style={globalStyles.subtitle}>
            Op welke verdieping ben je?
            </Text>
            <View
            style={globalStyles.line}
            />
                {/*List with all the floors using the navigation function*/}
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('MapFirst')}>
                <Text style={globalStyles.listFloors}> 1e Verdieping</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MapFirst')}>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MapSecond')}>
                    <Text style={globalStyles.listFloors}> 2e Verdieping</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MapThird')}>
                    <Text style={globalStyles.listFloors}> 3e Verdieping</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MapFourth')}>
                    <Text style={globalStyles.listFloors}> 4e Verdieping</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
);

export default MyComponent;




