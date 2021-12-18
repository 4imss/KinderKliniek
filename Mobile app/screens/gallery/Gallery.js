import React, { Component } from 'react'
import { View ,Image, ScrollView, Text, ImageBackground } from 'react-native'
import { globalStyles} from "../../styles/global";

/* Test photos for the Gallery */
const images=[require('../../images/gallery/Gallery1.jpg'),
    require('../../images/gallery/Gallery2.jpg'),
    require('../../images/gallery/Gallery3.jpg'),
    require('../../images/gallery/Gallery4.jpg'),
    require('../../images/gallery/Gallery5.jpg'),
    require('../../images/gallery/Gallery6.jpg'),
];

export class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state={selectedIndex:0}
    }
    setSelectedIndex(event){
        let oneImageWidth=event.nativeEvent.layoutMeasurement.width
        let currentPosition=event.nativeEvent.contentOffset.x
        let selectedIndex=Math.floor(currentPosition/oneImageWidth)
        this.setState({selectedIndex:selectedIndex})
    }
    render() {
        return (
            <View style={globalStyles.container}>
            <ImageBackground
                source={require("../../images/home/backgroundApp.png")}
                style={globalStyles.BackgroundImage}>

                    {/*Title*/}
                    <Text style={globalStyles.title}>
                        Galerij
                    </Text>
                    <Text style={globalStyles.subtitle}>
                        Bekijk hier foto's in de galerij.
                    </Text>
                    <View
                        style={globalStyles.line}
                    />
                    <Text> </Text>
                    {/*Horizontal scrolling images*/}
                    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}
                                onMomentumScrollEnd={(event)=>{this.setSelectedIndex(event)}} >
                        {images.map((image,index)=>{
                            return<View key={index.toString()}>
                                <Image style={globalStyles.image} source={image} />
                            </View>
                        })}
                    </ScrollView>

                    <ScrollView horizontal >
                        {images.map((image,index)=>{
                            return<View key={index.toString()}>
                                <Image style={globalStyles.image2} source={image} />
                            </View>
                        })}
                    </ScrollView>
            </ImageBackground>
            </View>
        )
    }
}

export default Gallery;