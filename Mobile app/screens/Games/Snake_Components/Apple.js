import React, { Component } from "react";
import {Image, View} from "react-native";

export default class Apple extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const x = this.props.position[0];
        const y = this.props.position[1];

        return (
            <Image source={require("../../../images/games/apple.png")} style={{width: this.props.size, height: this.props.size, position: "absolute", left: x * this.props.size, top: y * this.props.size}} />
        )
    }
}