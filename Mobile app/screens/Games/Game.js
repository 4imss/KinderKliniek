import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {globalStyles} from "../../styles/global";


export default function Game({ navigation }) {

//Layout
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../images/home/backgroundApp.png')} style={globalStyles.backgroundImage}>

                <Text style={styles.title}>Games</Text>

                <Text style={globalStyles.subtitle}>Speel een leuke game!</Text>

                <View style={styles.line}/>

                <View style={styles.imgRow}>

                {/*Touchable images */}
                <TouchableOpacity onPress={() => navigation.navigate('Caterpillar')}>
                    <Image source={require("../../images/games/caterpillar.png")} style={styles.gameImages}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('GameTwo')}>
                    <Image source={require("../../images/games/ticTacToe.png")} style={styles.gameImages}/>
                </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

//Style
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gameSubtitle: {
        fontSize: 18,
        marginTop:25,
        textDecorationLine: 'underline',
        paddingLeft: 28,
    },
    gameImages: {
        width: 146,
        height: 195,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 35,
    },
    imgRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    title: {
        marginTop: 70,
        color: '#B0B523',
        fontFamily: 'Papeje',
        fontSize: 50,
        paddingLeft: 20,
    },
    line: {
        borderBottomColor: '#B0B523',
        borderBottomWidth: 2,
        right: 25
    }
});