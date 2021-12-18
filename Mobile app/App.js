import * as React from 'react';
import * as Font from 'expo-font';
import Navigation from './Root';

export default class Fonts extends React.Component {
    state = {
        fontsLoaded: false,
    };

    async loadFonts() {
        await Font.loadAsync({
            // Load a font `Montserrat` from a static resource
            Papeje: require('./assets/fonts/PAPEJE__0.ttf'),
            Formata: require('./assets/fonts/Formata-Light.ttf'),
        });
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this.loadFonts();
    }

    render() {
        // Use the font with the fontFamily property after loading
        if (this.state.fontsLoaded) {
            return (
                <Navigation/>
            );
        } else {
            return null;
        }
    }
}