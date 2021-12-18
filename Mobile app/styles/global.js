import {StatusBar, StyleSheet, Dimensions } from 'react-native';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

export const globalStyles = StyleSheet.create({

    // General styling

    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
    },
    line: {
        borderBottomColor: '#026F99',
        borderBottomWidth: 2,
        right: 25
    },

    // Home page

    containerHome: {
        width: '100%',
        height: '70%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    headerLogo: {
        width: '80%',
        height: '20%',
        marginTop: 25,
        marginBottom: 15,
        marginLeft: '10%',
        marginRight: '10%'
    },
    box: {
        width: '50%',
        height: '50%',
        padding: 5,
    },
    boxTitle: {
        fontFamily: 'Papeje',
        fontSize: 30,
        color: 'white'
    },
    innerMaps: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#026f99"
    },
    innerInfo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#d9da63"
    },
    innerGames: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#b0b523"
    },
    innerMuzi: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#a1d7e3"
    },

    // Information pages

    title: {
        marginTop: 70,
        color: '#026F99',
        fontFamily: 'Papeje',
        fontSize: 50,
        paddingLeft: 20,
    },
    subtitle: {
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: 20,
        color: '#000',
        fontFamily: 'Formata',
        paddingLeft: 20,
    },
    body: {
        fontSize: 20,
    },
    departments: {
        fontSize: 15,
        paddingLeft: 20,
        margin: -4,
    },
    titleInformatie: {
        marginTop: 70,
        color: '#d9da63',
        fontFamily: 'Papeje',
        fontSize: 50,
        paddingLeft: 20,
    },
    lineInformatie: {
        borderBottomColor: '#d9da63',
        borderBottomWidth: 2,
        right: 25
    },
    titlePoli: {
        fontSize: 20,
        marginVertical: 10,
        color: 'black',
    },
    bodyPoli: {
        fontSize: 15,
        color: 'black',
    },
    scrollinfo: {
        height: '19%',
        width: screenWidth,
    },

    // Maps pages
    title4eVerdieping: {
        marginTop: 70,
        color: '#ff9e1b',
        fontFamily: 'Papeje',
        fontSize: 50,
        paddingLeft: 20,
    },
    line4eVerdieping: {
        borderBottomColor: '#ff9e1b',
        borderBottomWidth: 2,
        right: 25
    },
    mapContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    listFloors: {
      margin: 10,
        fontSize: 16,
        color: '#000',
        fontFamily: 'Formata',
        padding: 10,
        borderBottomColor: '#C6C6C6',
        borderBottomWidth: 1,

    },
    oneBox: {
        backgroundColor:'white',
        opacity: 0.9,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        borderRadius: 20,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    mapCardText: {
        fontFamily: 'Formata',
        color: 'black',
        fontSize: 24,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        width: 350,
    },
    mapClickableText: {
        lineHeight: 30,
        fontFamily: 'Formata',
        color: 'black',
        fontSize: 20,
        margin: 20,
        paddingRight: 30,
    },
    mapSubText: {
        fontFamily: 'Papeje',
        color: '#ffffff',
        fontSize: 15,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        width: 350,
    },
    mapBoxText: {
        lineHeight: 30,
        fontFamily: 'Formata',
        color: 'black',
        fontSize: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    imageList: {
        width: null,
        resizeMode: 'contain',
        height: 250,
        marginLeft: 20,
        marginRight: 20
    },
    imageHorizontal: {
        width: null,
        resizeMode: 'contain',
        height: 250,
        marginLeft: 20,
        marginRight: 20
    },
    imageVertical: {
        width: null,
        resizeMode: 'stretch',
        height: '88%',
        alignItems: 'center',
        marginLeft: 20,
        marginRight:20,
        marginBottom: 50,
    },

    // Gallery

    image:{
        width:screenWidth,
        height:250,
    },
    image2:{
        width: 180,
        borderRadius: 10,
        height: 130,
        marginRight: 5,
        marginLeft: 5,
    },
    selectedIndexContainer:{
        position:'absolute',
        top: 240,
        right: 20,
        backgroundColor: '#026F99',
        borderRadius: 20
    },
    selectedIndexText:{
        color: 'white',
        padding: 10,
        marginLeft: 10,
        marginRight: 10
    },
    text: {
        color: 'black',
        fontSize: 15
    },
    block: {
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        height: 200,
        width: 190,
        borderRadius: 15,
        padding: 5
    },
    ImageBlock: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 10
    },
    BackgroundImage: {
        flex:1,
        resizeMode: "cover",
        justifyContent: "center"
    },

    // smoelenboek pages

    titleSmoelenboek: {
        marginTop: '12%',
        color: '#C54D93',
        fontSize: 50,
        paddingLeft: '4%',
        fontFamily: 'Papeje',
    },
    lineSmoelenboek: {
        borderBottomColor: '#C54D93',
        borderBottomWidth: 2,
        right: 25,
        marginBottom: 20,
    },

    // overview smoelenboek

    containerStaff: {
        width: '100%',
        height: '100%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageOverview: {
        width: screenWidth / 4,
        height: screenHeight / 6,
        marginLeft: '5%',
        marginTop: '5%',
    },
    //check usage
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    colomn: {
        flex: 1,
        flexDirection: 'column',
    },
    textOverview: {
        marginLeft: '5%',
        marginTop: '2%',
        fontFamily: 'Formata',
    },
    scrollView:{
      height: '100%',
    },

    // Smoelenboek department pages

    rowContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    lineStaff: {
        borderBottomColor: '#C54D93',
        borderBottomWidth: 2,
        paddingTop: '4%',
        right: 25
    },
    imageStaff: {
        marginTop: '4%',
        marginLeft: '4%',
        marginBottom: '3%',
        width: screenWidth / 3,
        height: screenHeight / 4,
        borderTopLeftRadius: 7,
    },
    titleStaff: {
        fontSize: 14,
        marginLeft: '4%',
        marginVertical: '10%',
        fontWeight: 'bold',
    },
    textStaff: {
        fontSize: 13,
        marginLeft: '4%',
        marginRight: '4%',
    },
    emailIcon: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: '4%',
    },
    emailStaff: {
        marginLeft: '4%',
        marginTop: '2%',
    },


});
