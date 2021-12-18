import {Image, ImageBackground, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import { globalStyles } from '../../../styles/global';
import React from 'react';

const KinderGGZ = ( { navigation }) => (
    <View style={globalStyles.container}>
        <ImageBackground
            source={require('../../../images/home/backgroundApp.png')}
            style={globalStyles.backgroundImage}>
            <Text style={globalStyles.titleSmoelenboek}>KinderGGZ</Text>
            <Text style={globalStyles.subtitle}>Leer onze medewerkers kennen!</Text>
            <View style={globalStyles.lineSmoelenboek}/>

            {/*Loading in employees*/}
            <ScrollView style={globalStyles.scrollView}>
                <View style={{backgroundColor: "rgba(255, 255, 255, 0.5)"}}>
                    <View style={globalStyles.containerStaff}>
                        <TouchableOpacity  onPress={() => navigation.navigate('BiancaGorter')}>
                            <Image style={globalStyles.imageOverview}
                                   source={require('../../../images/employees/kinderGGZ/biancaGorter.png')}/>
                            <Text style={globalStyles.textOverview}>Bianca</Text>
                            <Text style={globalStyles.textOverview}>Gorter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('CarlijnSchut')}>
                            <Image style={globalStyles.imageOverview}
                                   source={require('../../../images/employees/kinderGGZ/carlijnSchut.png')}/>
                            <Text style={globalStyles.textOverview}>Carlijn</Text>
                            <Text style={globalStyles.textOverview}>Schut</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('ChalaneBouwhuis')}>
                            <Image style={globalStyles.imageOverview}
                                   source={require('../../../images/employees/kinderGGZ/chalaneBouwhuis.png')}/>
                            <Text style={globalStyles.textOverview}>Chalane</Text>
                            <Text style={globalStyles.textOverview}>Bouwhuis</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('ChristaKleinepier')}>
                            <Image style={globalStyles.imageOverview}
                                   source={require('../../../images/employees/kinderGGZ/christaKleinepier.png')}/>
                            <Text style={globalStyles.textOverview}>Christa</Text>
                            <Text style={globalStyles.textOverview}>Kleinepier</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('CindyRustam')}>
                            <Image style={globalStyles.imageOverview}
                                   source={require('../../../images/employees/kinderGGZ/cindyRustam.png')}/>
                            <Text style={globalStyles.textOverview}>Cindy</Text>
                            <Text style={globalStyles.textOverview}>Rustam</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('DaphneMeering')}>
                            <Image style={globalStyles.imageOverview}
                                   source={require('../../../images/employees/kinderGGZ/daphneMeering.png')}/>
                            <Text style={globalStyles.textOverview}>Daphne</Text>
                            <Text style={globalStyles.textOverview}>Meering</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('DianaRenardus')}>
                            <Image style={globalStyles.imageOverview}
                                   source={require('../../../images/employees/kinderGGZ/dianaRenardus.png')}/>
                            <Text style={globalStyles.textOverview}>Diana</Text>
                            <Text style={globalStyles.textOverview}>Renardus</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('JacquelineHeuvel')}>
                            <Image style={globalStyles.imageOverview}
                                   source={require('../../../images/employees/kinderGGZ/jacquelineHeuvel.png')}/>
                            <Text style={globalStyles.textOverview}>Jacqueline</Text>
                            <Text style={globalStyles.textOverview}>van den Heuvel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('JacquelineRodenburg')}>
                            <Image style={globalStyles.imageOverview}
                                   source={require('../../../images/employees/kinderGGZ/jacquelineRodenburg.png')}/>
                            <Text style={globalStyles.textOverview}>Jacqueline</Text>
                            <Text style={globalStyles.textOverview}>Rodenburg</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('LiesbethKoedoot')}>
                            <Image
                                style={globalStyles.imageOverview}
                                source={require('../../../images/employees/kinderGGZ/liesbethKoedoot.png')}/>
                            <Text style={globalStyles.textOverview}>Liesbeth</Text>
                            <Text style={globalStyles.textOverview}>Koedoot</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('MariekeDonders')}>
                            <Image
                                style={globalStyles.imageOverview}
                                source={require('../../../images/employees/kinderGGZ/mariekeDonders.png')}/>
                            <Text style={globalStyles.textOverview}>Marieke</Text>
                            <Text style={globalStyles.textOverview}>Donders</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('MarijkeHeijden')}>
                            <Image
                                style={globalStyles.imageOverview}
                                source={require('../../../images/employees/kinderGGZ/marijkeHeijden.png')}/>
                            <Text style={globalStyles.textOverview}>Marijke</Text>
                            <Text style={globalStyles.textOverview}>van der Heijden</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    </View>
);

export default KinderGGZ;