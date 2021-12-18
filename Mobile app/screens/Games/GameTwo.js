import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Modal, Button, ImageBackground } from 'react-native';
import { MaterialCommunityIcons as Icon} from 'react-native-vector-icons';
import {AntDesign, Ionicons} from '@expo/vector-icons';
import {globalStyles} from "../../styles/global";

export default class GameOne extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            gameState: [
                [0,0,0],
                [0,0,0],
                [0,0,0]
            ],
            currentPlayer: 1,
            modalVisible: false,
        }
    }

    componentDidMount() {
        this.initializeGame();
    }

    initializeGame = () => {
        this.setState({gameState:
        [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ],
        currentPlayer: 1,
        });
    }
    // Returns 1 if Player 1 won, -1 if Player 2 won, or 0 if no one has one.
    getWinner = () => {
        const NUM_TILES = 3;
        var arr = this.state.gameState;
        var sum;

        // Check rows.
        for (var i = 0; i < NUM_TILES; i++){
            sum = arr[i][0] + arr[i][1] + arr[i][2];
            if (sum == 3) { return 1; }
            else if (sum == -3) { return -1; }
        }

        // Check columns.
        for (var i = 0; i <NUM_TILES; i++){
            sum = arr[0][i] + arr[1][i] + arr[2][i];
            if (sum == 3) { return 1; }
            else if (sum == -3) { return -1; }
        }

        // Check diagonals.
        sum = arr[0][0] + arr[1][1] +arr[2][2];
        if (sum == 3) { return 1; }
        else if (sum == -3) { return -1; }

        sum = arr[2][0] + arr[1][1] +arr[0][2];
        if (sum == 3) { return 1; }
        else if (sum == -3) { return -1; }

        // There are no winners.
        return 0;
    }

    onNewGamePress = () => {
        this.initializeGame()
    }

    onTilePress = (row, col) => {
        // Don't allow tiles to change.
        var value = this.state.gameState[row][col];
        if (value !==0) {return; }

        // Grab current player.
        var currentPlayer = this.state.currentPlayer;

        // Set the correct Tile.
        var arr = this.state.gameState.slice();
        arr[row][col] = currentPlayer;
        this.setState({gameState: arr});

        // Switch to other player.
        var nextPlayer = (currentPlayer == 1) ? -1 : 1;
        this.setState({currentPlayer: nextPlayer});

        // Check for winners.
        var winner = this.getWinner();
        if (winner == 1) {
            //TODO: Make a Modal instead of alert.
            Alert.alert("Speler 1 heeft gewonnen!");
            this.initializeGame();
        } else if (winner == -1) {
            Alert.alert("Speler 2 heeft gewonnen!");
            this.initializeGame();
        }
    }

    renderIcon = (row, col) => {
        var value = this.state.gameState[row][col];
        switch (value)
        {
            case 1: return <Icon name="close" style={styles.tileX}/>
            case -1: return <Icon name="circle-outline" style={styles.tileO}/>
            default: return <View />;
        }
    }

    onSpelregelsPress = () => {
        //TODO: Make a Modal instead of alert.
        Alert.alert("Degene die drie van zijn eigen tekens op een rij heeft, dat mag diagonaal, verticaal of horizontaal zijn, heeft gewonnen.");
    }


    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { modalVisible } = this.state;
        return (
            <ImageBackground source={require('../../images/home/backgroundApp.png')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View>
                    <Text style={{fontSize:30, fontFamily: 'Papeje', marginBottom:35, color: '#A1D7E3'}}>
                        Boter-kaas-en-eieren
                    </Text>
                </View>

                <View style={{paddingTop:30}} />

                <View style={{flexDirection: "row", backgroundColor: '#D9DA63'}}>
                    <TouchableOpacity onPress={() => this.onTilePress(0, 0)} style={[styles.tile, {borderLeftWidth: 0, borderTopWidth: 0,}]}>
                        {this.renderIcon(0, 0)}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.onTilePress(0, 1)} style={[styles.tile, {borderTopWidth: 0,}]}>
                        {this.renderIcon(0,1)}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.onTilePress(0, 2)} style={[styles.tile, {borderTopWidth: 0, borderRightWidth: 0,}]} >
                        {this.renderIcon(0,2)}
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: "row", backgroundColor: '#D9DA63'}}>
                    <TouchableOpacity onPress={() => this.onTilePress(1, 0)} style={[styles.tile, {borderLeftWidth: 0,}]}>
                        {this.renderIcon(1,0)}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.onTilePress(1, 1)} style={[styles.tile, {}]}>
                        {this.renderIcon(1,1)}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.onTilePress(1, 2)} style={[styles.tile, {borderRightWidth: 0,}]}>
                        {this.renderIcon(1,2)}
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: "row", backgroundColor: '#D9DA63'}}>
                    <TouchableOpacity onPress={() => this.onTilePress(2, 0)} style={[styles.tile, {borderBottomWidth: 0, borderLeftWidth: 0,}]}>
                        {this.renderIcon(2,0)}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.onTilePress(2, 1)} style={[styles.tile, {borderBottomWidth: 0,}]}>
                        {this.renderIcon(2,1)}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.onTilePress(2, 2)} style={[styles.tile, {borderBottomWidth: 0, borderRightWidth: 0,}]}>
                        {this.renderIcon(2,2)}
                    </TouchableOpacity>
                </View>

                    {/*Modal with rules of the game*/}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
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
                                Bij het begin zijn alle velden leeg.{"\n"}
                                Speler 1 zet een 'kruis' en speler 2 een 'rondje'.{"\n"}{"\n"}
                                De speler die drie van zijn eigen tekens op een rij heeft, dat mag diagonaal, verticaal
                                of horizontaal zijn, heeft gewonnen.
                            </Text>
                        </View>
                    </Modal>
                    {/*Icon to open the modal with the rules and an icon to restart the game*/}
                    <View style={{paddingTop:50}} />
                    <View style={globalStyles.row}>
                        <Icon name="information-outline" size={40} color='#A1D7E3' onPress={() => this.setModalVisible(true)} />
                        <View><Text>         </Text></View>
                        <Icon name="restart" size={40} color='#A1D7E3' onPress={this.onNewGamePress} />
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1
    },
    tile: {
        borderWidth: 3,
        borderColor: '#B0B523',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tileX: {
        color: 'red',
        fontSize: 60,
    },
    tileO: {
        color: 'green',
        fontSize: 60,
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