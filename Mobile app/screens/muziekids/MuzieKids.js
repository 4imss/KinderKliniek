import {ImageBackground, StyleSheet, Text, ScrollView, View} from 'react-native';
import React from "react";
import {globalStyles} from "../../styles/global";
import { Video } from 'expo-av';

export default function MuzieKids ({navigation}) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        //Layout
        <View style={styles.container}>
            <ImageBackground source={require('../../images/home/backgroundApp.png')} style={styles.backgroundImage}>
                <Text style={styles.title}>MuzieKids</Text>

                <Text style={globalStyles.subtitle}>Bekijk de leuke Muziekids filmpjes!</Text>

                <View style={styles.line}/>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.vidRow}>
                        {/*Video's that can be played using the state setStatus status */}
                        <Video
                            ref={video}
                            style={styles.videos}
                            source={require("../../images/muziekids/muziekids.mp4")}
                            useNativeControls
                            resizeMode="contain"
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                        <Video
                            ref={video}
                            style={styles.videos}
                            source={require("../../images/muziekids/muziekids.mp4")}
                            useNativeControls
                            resizeMode="contain"
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                        <Video
                            ref={video}
                            style={styles.videos}
                            source={require("../../images/muziekids/muziekids.mp4")}
                            useNativeControls
                            resizeMode="contain"
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                        <Video
                            ref={video}
                            style={styles.videos}
                            source={require("../../images/muziekids/muziekids.mp4")}
                            useNativeControls
                            resizeMode="contain"
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                        <Video
                            ref={video}
                            style={styles.videos}
                            source={require("../../images/muziekids/muziekids.mp4")}
                            useNativeControls
                            resizeMode="contain"
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

//Style
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
    },
    videos: {
        height: 115,
        width: '45%',
        marginTop: 20,
        marginRight: 5,
        marginLeft: 10
    },
    vidRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    title: {
        marginTop: 70,
        color: '#A1D7E3',
        fontFamily: 'Papeje',
        fontSize: 50,
        paddingLeft: 20,
    },
    line: {
        borderBottomColor: '#A1D7E3',
        borderBottomWidth: 2,
        right: 25,
        marginBottom: 30
    }
});