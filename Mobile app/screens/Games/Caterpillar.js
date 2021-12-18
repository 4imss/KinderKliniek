import React, { Component } from "react";
import {View, Text, TouchableOpacity, Alert, Image, Modal, ImageBackground, StyleSheet, Pressable, Dimensions} from "react-native";
import { GameEngine } from "react-native-game-engine";
import Constants from "./Snake_Components/Constants";
import Head from "./Snake_Components/Head";
import Apple from "./Snake_Components/Apple";
import Tail from "./Snake_Components/Tail";
import {GameLoop} from "./Snake_Components/GameLoop";
import {MaterialCommunityIcons as Icon} from "react-native-vector-icons";
import {globalStyles} from "../../styles/global";
import {AntDesign} from "@expo/vector-icons";

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

export default class Caterpillar extends Component {
    constructor(props) {
        super(props);
        this.boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
        this.engine = null;
        this.state = {
            running: true
        }
    }
    // Gives a warning when game ended
    onEvent = (e) => {
        if (e.type === "game-over"){
            Alert.alert("GAME OVER");
            this.setState({
                running:false
            })
        }
    }

    // Resets the game and puts the snake and apple in a different starting position
    reset = () => {
        this.engine.swap({
            head: { position: [0,  0], xspeed: 1, yspeed: 0, nextMove: 10, updateFrequency: 10, size: 20, renderer: <Head />},
            food: { position: [this.randomBetween(0, Constants.GRID_SIZE - 1), this.randomBetween(0, Constants.GRID_SIZE - 1)], size: 20, renderer: <Apple />},
            tail: { size: 20, elements: [], renderer: <Tail /> }
        });
        this.setState({
            running: true
        });
    }

    randomBetween = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // State to make the modal visible wich starts at false
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { modalVisible } = this.state;
        return (
            // Layout
            <ImageBackground source={require('../../images/home/backgroundApp.png')} style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", marginTop: 40,}}>
                <Text style={{fontSize: 35, fontFamily: 'Papeje', color: "#B0B523", marginBottom: 20, marginTop: 30,}}>Rups en appels</Text>
                    <GameEngine
                    ref={(ref) => {this.engine = ref }}
                    style={{width: this.boardSize, height: this.boardSize, flex: null, backgroundColor: "#B0B523", marginBottom: 15}}
                    systems={[GameLoop]}
                    entities={{
                        head: { position: [0, 0], xspeed: 1, yspeed: 0, updateFrequency: 10, nextMove:10, size: Constants.CELL_SIZE, renderer: <Head /> },
                        food: { position: [this.randomBetween(0, Constants.GRID_SIZE -1), this.randomBetween(0, Constants.GRID_SIZE -1)], size: Constants.CELL_SIZE, renderer: <Apple /> },
                        tail: { size: Constants.CELL_SIZE, elements: [], renderer: <Tail /> }
                    }}
                    onEvent={this.onEvent}
                    running={this.state.running}
                />
                <View style={globalStyles.row}>
                    <Pressable style={styles.button} onPress={this.reset}>
                        <Text style={styles.text}>Speel opnieuw!</Text>
                    </Pressable>
                    {/*Icon makes modal visible which puts the state to true */}
                    <Icon name="information-outline" size={40} color='#A1D7E3' onPress={() => this.setModalVisible(!modalVisible)} />
                </View>

                <View style={{marginTop: 25,alignItems: "center", width: '100%', height: '40%', flexDirection: "column"}}>

                    <View style={{width:'100%', height:'20%', flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                        <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-up"})}}>
                            <Image source={require("../../images/games/arrowTop.png")} style={{width: screenWidth/5, height: screenHeight/9}}/>
                        </TouchableOpacity>
                    </View>

                    <View style={{width:'100%', height:'30%', flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                        <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-left"})}}>
                            <Image source={require("../../images/games/arrowLeft.png")} style={{width: screenWidth/5, height: screenHeight/9, paddingRight: '42%'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-right"})}}>
                            <Image source={require("../../images/games/arrowRight.png")} style={{width: screenWidth/5, height: screenHeight/9}}/>
                        </TouchableOpacity>
                    </View>

                    <View style={{width:'100%', height:'30%', flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                        <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-down"})}}>
                            <Image source={require("../../images/games/arrowDown.png")} style={{width: screenWidth/5, height: screenHeight/9}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

                {/*Modal that displays the rules of the game*/}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible ?? false}
                >
                    <View style={styles.modalView}>
                        {/*Button which has state set to false to close modal*/}
                        <AntDesign
                            style={{marginRight: '90%', paddingBottom:'5%', }}
                            name='close'
                            color={'black'}
                            size={25}
                            onPress={() => this.setModalVisible(!modalVisible)}
                        />
                        <Text>
                            Probeer de rups rond te laten lopen zonder de randen van het veld of de rups zelf te raken.{"\n"}{"\n"}
                            Je kan het hoofd van de rups naar boven, beneden, links of rechts sturen, de rest van de rups volgt vanzelf.{"\n"}{"\n"}
                            In het veld liggen appels. Het eten van appels zorgt ervoor dat de rups langer wordt.
                        </Text>
                    </View>
                </Modal>
            </ImageBackground>
        );
    }
}

//Style
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 0,
        paddingHorizontal: 15,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#A1D7E3',
        marginRight: 125
    },
    text: {
        fontSize: 13,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    modalView: {
        margin: 20,
        marginTop: 200,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
});
