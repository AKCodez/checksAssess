import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, ScrollView } from 'react-native';
import MapView, {Marker} from 'react-native-maps'
import axios from 'axios'

export default class Map extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            markers: []
          }
          this.handlePress = this.handlePress.bind(this)
    }
    handlePress(e){
        this.setState({
          markers: [...this.state.markers,
            {
              coordinate: e.nativeEvent.coordinate
            }
          ]
        }, console.log( e.nativeEvent.coordinate))
      }
 
    render() {
        
        return (
            <MapView style={{flex: 1}} 
      initialRegion={{
        latitude: 34.022499,
        longitude: -118.394287,
        latitudeDelta: 0.0922,
        longitudeDelta: 1.0421
      }}
      showsUserLocation={true}
      onLongPress={this.handlePress}>
        {this.state.markers.map((marker,key) => {
          return <Marker key={key} draggable  {...marker}/>
        })}
      </MapView>   
        )
    }
}