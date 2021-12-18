import { View, Image, ImageBackground, Modal, Text, TouchableOpacity,} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from "../../styles/global";
import {AntDesign} from '@expo/vector-icons';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';


export default function MapFirst({navigation}) {
    // Sets state for Modal to open and close //
    const [modalOpen, setModalOpen] = useState(false);
    // Array of specialties on floor //
    const [poli] = useState('Psycholoog \nDietetiek \nSpeltherapie');


    return(
        // Layout //
        <View
            style={globalStyles.mapContainer}>
            <ImageBackground
                source={require('../../images/home/backgroundApp.png')}
                style={globalStyles.backgroundImage}>
                <Text style={globalStyles.titleInformatie}>
                    2e Verdieping
                </Text>
                <Text style={globalStyles.subtitle}>
                    Vergroot om te navigeren
                </Text>
                <View
                    style={globalStyles.lineInformatie}
                />
                {/*Modal which has map of floor inside and a zoomable function*/}
                <Modal
                    visible={modalOpen}
                    animationType='slide'>
                    <View
                        style={{backgroundColor: "#000000", flex: 1}}>
                        {/*Button which has state set to false to close modal*/}
                        <AntDesign
                            style={{paddingTop: 50, marginLeft: 20 }}
                            name='close'
                            color={'white'}
                            size={30}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReactNativeZoomableView
                            maxZoom={1.5}
                            minZoom={1}
                            zoomStep={0.5}
                            initialZoom={1}
                            bindToBorders={true}
                            captureEvent={true}>
                            <Image
                                source={require('../../images/verdiepingen/Plattegrond2eEtageTurned.jpg')}
                                style={[globalStyles.imageVertical]}
                            />
                        </ReactNativeZoomableView>
                    </View>
                </Modal>

                <View
                    style={globalStyles.container}>
                    {/*Image has onpress property and uses state set to true to open modal*/}
                    <TouchableOpacity
                        onPress={() => setModalOpen(true)}>
                        <Image
                            source={require('../../images/verdiepingen/Plattegrond2eEtage(horizontaal).png')}
                            style={globalStyles.imageHorizontal}
                        />
                    </TouchableOpacity>
                    <View
                        style={globalStyles.oneBox}>
                        <Text style={globalStyles.mapBoxText}>Welke poli's zijn er te vinden:</Text>
                        {/*Uses const to load in the different poli's on the floor */}
                        <Text style={globalStyles.mapClickableText}>
                            {poli}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}