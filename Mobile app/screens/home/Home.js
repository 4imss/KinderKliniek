import React from "react";
import {Text, View, ImageBackground, Image, TouchableOpacity} from "react-native";
import {globalStyles} from "../../styles/global";

export default function Home({navigation}) {

    return (
           <View style={globalStyles.container}>
               <ImageBackground
                   source={require('../../images/home/backgroundApp.png')}
                   style={globalStyles.backgroundImage}>

                   <Image style={globalStyles.headerLogo}
                            source={require('../../images/home/deKinderKliniekLogo.png')}/>

                   <View style={globalStyles.containerHome}>
                       <View style={globalStyles.box}
                             onPress={() => navigation.navigate('Map')}>
                               <TouchableOpacity style={globalStyles.innerMaps} onPress={() => navigation.navigate('Map')}>
                                    <Text style={globalStyles.boxTitle}>Wegwijzer</Text>
                               </TouchableOpacity>
                       </View>

                       <View style={globalStyles.box}>
                           <TouchableOpacity style={globalStyles.innerInfo} onPress={() => navigation.navigate('Information')}>
                               <Text style={globalStyles.boxTitle}>Informatie</Text>
                           </TouchableOpacity>
                       </View>

                       <View style={globalStyles.box}>
                           <TouchableOpacity style={globalStyles.innerGames} onPress={() => navigation.navigate('Game')}>
                               <Text style={globalStyles.boxTitle}>Games
                               </Text>
                           </TouchableOpacity>
                       </View>

                       <View style={globalStyles.box}>
                           <TouchableOpacity style={globalStyles.innerMuzi} onPress={() => navigation.navigate('MuzieKids')}>
                               <Text style={globalStyles.boxTitle}
                                     onPress={() => navigation.navigate('MuzieKids')}>Muziekids
                               </Text>
                           </TouchableOpacity>
                       </View>
                   </View>
               </ImageBackground>
           </View>
        );
    };
