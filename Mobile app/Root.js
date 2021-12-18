import * as React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/home/Home';
import Game from './screens/Games/Game';
import Information from './screens/information/Information';
import Portaal from "./screens/portaal/Portaal";
import InfoLayout from "./screens/information/InfoLayout";
import Map from './screens/maps/Map';
import MapFirst from './screens/maps/MapFirst';
import MapSecond from './screens/maps/MapSecond';
import MapThird from './screens/maps/MapThird';
import Gallery from './screens/gallery/Gallery';
import GameTwo from "./screens/Games/GameTwo";
import Caterpillar from "./screens/Games/Caterpillar";
import MapFourth from "./screens/maps/MapFourth";
import Smoelenboek from "./screens/smoelenboek/Smoelenboek";
import { Ionicons } from '@expo/vector-icons';
import KinderGGZSmoelenboek from "./screens/smoelenboek/kinderGGZ/KinderGGZoverview";
import BiancaGorter from "./screens/smoelenboek/kinderGGZ/BiancaGorter";
import CarlijnSchut from "./screens/smoelenboek/kinderGGZ/CarlijnSchut";
import ChalaneBouwhuis from "./screens/smoelenboek/kinderGGZ/ChalaneBouwhuis";
import ChristaKleinepier from "./screens/smoelenboek/kinderGGZ/ChristaKleinepier";
import CindyRustam from "./screens/smoelenboek/kinderGGZ/CindyRustam";
import DaphneMeering from "./screens/smoelenboek/kinderGGZ/DaphneMeering";
import DianaRenardus from "./screens/smoelenboek/kinderGGZ/DianaRenardus";
import JacquelineHeuvel from "./screens/smoelenboek/kinderGGZ/JacquelineHeuvel";
import JacquelineRodenburg from "./screens/smoelenboek/kinderGGZ/JacquelineRodenburg";
import LiesbethKoedoot from "./screens/smoelenboek/kinderGGZ/LiesbethKoedoot";
import MariekeDonders from "./screens/smoelenboek/kinderGGZ/MariekeDonders";
import MarijkeHeijden from "./screens/smoelenboek/kinderGGZ/MarijkeHeijden";
import MarleenVermeer from "./screens/smoelenboek/kinderGGZ/MarleenVermeer";
import MarleenWolters from "./screens/smoelenboek/kinderGGZ/MarleenWolters";
import MarlousBouman from "./screens/smoelenboek/kinderGGZ/MarlousBouman";
import RozemarijnPagee from "./screens/smoelenboek/kinderGGZ/RozemarijnPagee";
import SimoneSormani from "./screens/smoelenboek/kinderGGZ/SimoneSormani";
import MuzieKids from "./screens/muziekids/MuzieKids";

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation, route }) => {
    //Hiding bottom nav on certain pages
    React.useLayoutEffect(() => {
        const tabHiddenRoutes = ["Caterpillar", "GameTwo"];

        if(tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))){
            navigation.setOptions({tabBarVisible: false});
        }else{
            navigation.setOptions({tabBarVisible: true});
        }
    }, [navigation, route]);
    return(
        //Navigation stack
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <HomeStack.Screen name="Game" component={Game} options={{ headerShown: false }} />
            <HomeStack.Screen name="Caterpillar" component={Caterpillar} options={{ headerShown: false }} />
            <HomeStack.Screen name="GameTwo" component={GameTwo} options={{ headerShown: false }} />
            <HomeStack.Screen name="Map" component={Map} options={{ headerShown: false }} />
            <HomeStack.Screen name="MuzieKids" component={MuzieKids} options={{ headerShown: false }} />
            <HomeStack.Screen name="MapFirst" component={MapFirst} options={{ headerShown: false }} />
            <HomeStack.Screen name="MapSecond" component={MapSecond} options={{ headerShown: false }} />
            <HomeStack.Screen name="MapThird" component={MapThird} options={{ headerShown: false }} />
            <HomeStack.Screen name="MapFourth" component={MapFourth} options={{ headerShown: false }} />
            <HomeStack.Screen name="Information" component={Information} options={{ headerShown: false }} />
            <HomeStack.Screen name="InfoLayout" component={InfoLayout} options={{ headerShown: false }} />
        </HomeStack.Navigator>
    );
}

const StaffStack = createStackNavigator();

function StaffStackScreen() {
    return (
        <StaffStack.Navigator>
            <StaffStack.Screen name="Smoelenboek" component={Smoelenboek} options={{ headerShown: false }} />
            <StaffStack.Screen name="KinderGGZSmoelenboek" component={KinderGGZSmoelenboek} options={{ headerShown: false }} />
            <StaffStack.Screen name="BiancaGorter" component={BiancaGorter} options={{ headerShown: false }} />
            <StaffStack.Screen name="CarlijnSchut" component={CarlijnSchut} options={{ headerShown: false }} />
            <StaffStack.Screen name="ChalaneBouwhuis" component={ChalaneBouwhuis} options={{ headerShown: false }} />
            <StaffStack.Screen name="ChristaKleinepier" component={ChristaKleinepier} options={{ headerShown: false }} />
            <StaffStack.Screen name="CindyRustam" component={CindyRustam} options={{ headerShown: false }} />
            <StaffStack.Screen name="DaphneMeering" component={DaphneMeering} options={{ headerShown: false }} />
            <StaffStack.Screen name="DianaRenardus" component={DianaRenardus} options={{ headerShown: false }} />
            <StaffStack.Screen name="JacquelineHeuvel" component={JacquelineHeuvel} options={{ headerShown: false }} />
            <StaffStack.Screen name="JacquelineRodenburg" component={JacquelineRodenburg} options={{ headerShown: false }} />
            <StaffStack.Screen name="LiesbethKoedoot" component={LiesbethKoedoot} options={{ headerShown: false }} />
            <StaffStack.Screen name="MariekeDonders" component={MariekeDonders} options={{ headerShown: false }} />
            <StaffStack.Screen name="MarijkeHeijden" component={MarijkeHeijden} options={{ headerShown: false }} />
            <StaffStack.Screen name="MarleenVermeer" component={MarleenVermeer} options={{ headerShown: false }} />
            <StaffStack.Screen name="MarleenWolters" component={MarleenWolters} options={{ headerShown: false }} />
            <StaffStack.Screen name="MarlousBouman" component={MarlousBouman} options={{ headerShown: false }} />
            <StaffStack.Screen name="RozemarijnPagee" component={RozemarijnPagee} options={{ headerShown: false }} />
            <StaffStack.Screen name="SimoneSormani" component={SimoneSormani} options={{ headerShown: false }} />

        </StaffStack.Navigator>
    );
}

const PortalStack = createStackNavigator();

function PortalStackScreen() {
    return (
        <PortalStack.Navigator>
            <PortalStack.Screen name="Portaal" component={Portaal} />

        </PortalStack.Navigator>
    );
}

export default (Navigation) => (
    //Bottom navigation pages with styling
    <NavigationContainer>
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name === 'Smoelenboek') {
                        iconName = focused ? 'happy-outline' : 'happy-outline';
                    }else if (route.name === 'Galerij') {
                        iconName = focused ? 'image-outline' : 'image-outline';
                    }
                    else if (route.name === 'Portaal') {
                        iconName = focused ? 'md-person-circle-outline' : 'md-person-circle-outline';
                    }
                    return <Ionicons name={iconName} size={20} color={color} />;
                },
            })}
            tabBarOptions={{
                inactiveBackgroundColor: 'white',
                labelStyle: {
                    fontSize: 11,
                    marginBottom: 4,
                    color: 'black',
                },
                style: {
                    height: 45,
                }
            }}>
            <Tabs.Screen name= "Home" component={HomeStackScreen}/>
            <Tabs.Screen name= "Smoelenboek" component={StaffStackScreen} />
            <Tabs.Screen name= "Galerij" component={Gallery} />
            <Tabs.Screen name= "Portaal" component={PortalStackScreen} />
        </Tabs.Navigator>
    </NavigationContainer>
)