import React from 'react';
import { WebView } from 'react-native-webview'


const Portaal = () => {
    return <WebView
        source={{ uri: 'https://dkkp-portal.timeff.com/'}}
    />
}

export default Portaal;