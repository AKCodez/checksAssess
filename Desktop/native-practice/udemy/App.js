import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, ScrollView } from 'react-native';
import MapView, {Marker} from 'react-native-maps'
import axios from 'axios'
import Map from './components/Map.js'

export default class App extends React.Component {  
    constructor(props){
      super(props)
      this.state = {
        loggedIn: false
      }
      this.handleButton = this.handleButton.bind(this)
 
    }
    handleButton(){
      this.setState({
        loggedIn:true
      })
    }
    
    componentDidMount(){
      // axios.get('http://localhost:3009/locations')
      // .then((res) => this.setState({
      //   markers: res.data
      // }))
      // .catch((err) => console.log(err))
      

    }
  render() {
    if(!this.state.loggedIn){
      return (
        <View style={styles.container}>
          <TextInput  placeholder="Username" style={{borderColor: "black", borderWidth: 1, padding: 10, width: 250}} />
          <TextInput  placeholder="Email" style={{borderColor: "black", borderWidth: 1, padding: 10, width: 250}} />
          <Button onPress={this.handleButton} title="Sign Up"/>
        </View>
      )
    }
     return (
      <Map  />
      );
  }
}

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
 