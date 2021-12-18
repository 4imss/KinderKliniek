import React, { useState, useEffect } from 'react';
import {
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    ActivityIndicator,
    View,
    ImageBackground,
    ScrollView
} from 'react-native';
import {globalStyles} from "../../styles/global";
import {List} from "react-native-paper";

// API link
const Api = "https://apitestedwin.github.io/Data/jsondata.json"

const App = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

// Fetch API and puts data in item
    useEffect(() => {
        fetch(Api)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => alert(error))
            .then(setLoading(false));
    })

    return (
        // Makes sure that the loaded data is visible
        <SafeAreaView style={styles.container}>
            {isLoading ? (

                <ActivityIndicator />
            ): (
                //Layout
                <View style={globalStyles.container}>
                    <ImageBackground
                        source={require('../../images/home/backgroundApp.png')}
                        style={globalStyles.backgroundImage}>
                        <Text style={globalStyles.titleInformatie}>Informatie</Text>
                        <Text style={globalStyles.subtitle}>Welke zorg zoek je?</Text>
                        <View style={globalStyles.lineInformatie}/>

                        <List.AccordionGroup>
                            {/*Group 1*/}
                            <List.Accordion title="Medische zorg" id="1">
                                <ScrollView style={globalStyles.scrollinfo}>
                                    <View>
                                        {/*Everything in the flatlist contains data from the API and sends the data to the next page*/}
                                        {/*using the onpress navigation.navigate function*/}
                                        <FlatList data={data} keyExtractor={({id}, index) => id.toString()}
                                                  renderItem={({item}) =>(
                                                      <List.Item style={globalStyles.departments}
                                                                 title={item.title}
                                                                 onPress={() => navigation.navigate('InfoLayout', {item})}
                                                      />)}/>
                                    </View>
                                </ScrollView>
                            </List.Accordion>

                            {/*Group 2*/}
                            <List.Accordion title="Paramedische zorg" id="2">
                                <ScrollView style={globalStyles.scrollinfo}>
                                    <List.Item style={globalStyles.departments}
                                               title="Hypnotherapie"
                                    />
                                </ScrollView>
                            </List.Accordion>

                            {/*Group 3*/}
                            <List.Accordion title="Niet medische zorg" id="3">
                                <ScrollView style={globalStyles.scrollinfo}>
                                    <List.Item style={globalStyles.departments}
                                               title="AutismeInfoCentrum"
                                    />
                                    <List.Item style={globalStyles.departments}
                                               title="Faalangst"
                                    />
                                </ScrollView>
                            </List.Accordion>

                            {/*Group 4*/}
                            <List.Accordion title="De kinder GGZ" id="4">
                                <ScrollView style={globalStyles.scrollinfo}>
                                    <List.Item style={globalStyles.departments}
                                               title="Angsten"
                                    />
                                </ScrollView>
                            </List.Accordion>
                        </List.AccordionGroup>
                    </ImageBackground>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
export default App;