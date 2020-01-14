import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, ScrollView } from 'react-native';
import MapView, {Marker} from 'react-native-maps'

export default class List extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <Text style={{position:"absolute"
            ,top:100, right:170}}>
                Hello World
            </Text>
        )
    }
}