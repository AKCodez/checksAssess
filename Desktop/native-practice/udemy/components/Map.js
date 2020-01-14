import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, ScrollView } from 'react-native';
import MapView, {Marker} from 'react-native-maps'
import axios from 'axios'
import data from './data.js'
import List from './List.js'

export default class Map extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            markers: [],
            listView: false
          }
          this.handlePress = this.handlePress.bind(this)
          this.handleView = this.handleView.bind(this)

    }
    handleView() {
      this.setState({
        listView: true
      })
    }
    handlePress(e){
        this.setState({
          markers: [...this.state.markers,
            {
              coordinate: e.nativeEvent.coordinate
            }
          ]
        }, console.log( this.state.markers))
      }
      componentDidMount(){
        this.setState({
          markers: data
        })
      }
    render() {
        if(this.state.listView === false){
          return (
              <View style={{ flex: 1 }}>
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
            return <Marker  pinColor="red" title={marker.title} description={marker.description}  key={key} draggable  {...marker}/>
          })}
        </MapView>
        <View
          style={{
              position: 'absolute',//use absolute position to show button on top of the map
               //for center align
               top:25,
               right:25,
              alignSelf: 'flex-end' //for align to right
          }}
      >
          <Button onPress={this.handleView} title="List View"/>
      </View>
  </View>   
          )
        }
        return (
          
            <List/>
          
        )
    }
}