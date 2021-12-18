import React from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, ScrollView, Dimensions} from 'react-native';
import { globalStyles } from "../../styles/global";


var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

const App = ( { route, navigation }) => {
    //Sure the variable in this case item can take the right data out op the API
    const { item } = route.params;

    return(
        <ImageBackground
            source={require('../../images/home/backgroundApp.png')}
            style={globalStyles.backgroundImage}>
            <View style={styles.container}>
                {/*Loads in the data using an subcatagory*/}
                <Text style={styles.title}>{JSON.stringify(item.title)}</Text>
                <View style={styles.line}/>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{backgroundColor: "rgba(255, 255, 255, 0.5)"}}>
                        <Text style={styles.text}>
                            Loopneus, tranende ogen, galbulten of een duidelijke reactie na voeding, zoals bijvoorbeeld na het eten of drinken van melk, pinda,
                            fruit, noten, vis of garnalen; een allergie kan zich op verschillende manieren uiten.
                        </Text>

                        <Text style={styles.head}>Voor wie is de Allergie poli?</Text>
                        <Text style={styles.text}>
                            In de allergiepoli worden kinderen en jongeren tussen de 0 en 18 jaar, die een allergische reactie
                            hebben gehad, onderzocht om te achterhalen waardoor die reactie is veroorzaakt. Er wordt niet alleen naar
                            de algemene allergieën gekeken, zoals hooikoorts, maar ook naar ingewikkelde voedselallergieën.
                        </Text>

                        <Text style={styles.head}>Diagnose</Text>
                        <Text style={styles.text}>
                            De allergie wordt opgespoord op grond van de klachten met de benodigde aanvullende onderzoeken,
                            bijvoorbeeld de ‘krasjestest’ of een bloedonderzoek. We beschikken over de nieuwste
                            onderzoeksmogelijkheden en testen op het gebied van allergie, die allemaal op korte termijn in De
                            Kinderkliniek worden uitgevoerd.
                        </Text>

                        <Text style={styles.head}>Behandeling</Text>
                        <Text style={styles.text}>
                            De allergiepoli stopt niet bij de diagnose, maar behandelt en begeleidt de patiënten met allergie ook.
                            Met een goede behandeling en begeleiding zijn de klachten voor de meeste allergieën goed onder controle te
                            houden. Met een goede behandeling en begeleiding zijn de klachten voor de meeste allergieën goed onder
                            controle te houden.
                        </Text>

                        <Text style={styles.head}>Afspraak maken</Text>
                        <Text style={styles.text}>
                            Een afspraak maken kan met een verwijsbrief van de huisarts. Meestal krijgen de kinderen eerst een
                            afspraak op de eczeempoli of bij de algemene kinderarts, die daarna ook kunnen doorverwijzen naar de
                            allergiepoli. De behandeling vindt plaats bij een team van allergie-experts. Ons team, bestaand uit gespecialiseerde
                            kinderverpleegkundigen, allergieverpleegkundigen, een physician assistant i.o. en een allergiediëtist
                            werkt onder supervisie van een kinderarts en een kinderallergoloog.
                        </Text>
                    </View>

                    {/*Images from all the employees*/}
                    <Text style={styles.head}>Medewerkers</Text>
                    <View style={globalStyles.row}>
                        <Image style={styles.image}
                               source={require('../../images/employees/allergie/Debbie.png')}
                        />
                            <Image style={styles.image}
                                   source={require('../../images/employees/allergie/Ghislaine.png')}
                            />

                        <Image style={styles.image}
                               source={require('../../images/employees/allergie/Liesbeth.png')}
                        />
                        <Image style={styles.image}
                               source={require('../../images/employees/allergie/marike.png')}
                        />
                        <Image style={styles.image}
                               source={require('../../images/employees/allergie/Nanda.png')}
                        />
                        <Image style={styles.image}
                               source={require('../../images/employees/allergie/Renata.png')}
                        />
                        <Image style={styles.image}
                               source={require('../../images/employees/allergie/Sandra.png')}
                        />
                        <Image style={styles.image}
                               source={require('../../images/employees/allergie/tim.png')}
                        />
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    );
}
// Styling
const styles = StyleSheet.create({
    title: {
        marginTop: 70,
        marginBottom: 25,
        color: '#D9DA63',
        fontFamily: 'Papeje',
        fontSize: 50,
        paddingLeft: 20,
    },
    line: {
        borderBottomColor: '#D9DA63',
        borderBottomWidth: 2,
        right: 25,
        marginBottom: 25
    },
    container: {
        flex: 1,
        marginLeft: '5%',
        marginRight: '5%'
    },
    head: {
        marginBottom: 5,
        marginTop:5,
        fontWeight: "bold",
    },
    text: {
        flex: 1,
        justifyContent: 'space-evenly',
        marginBottom: 15,
        fontFamily: 'Formata',
        lineHeight: 20,
    },
    image: {
        width: screenWidth / 6,
        height: screenHeight / 11,
        marginTop: '5%',
        marginRight: '5%',
        marginBottom: 10,
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export default App