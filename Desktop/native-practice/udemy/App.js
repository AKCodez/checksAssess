import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, ScrollView } from 'react-native';
import MapView, {Marker} from 'react-native-maps'



// export default function App() {
//   const [goal, setGoal] = useState('')
//   const [allGoals,SetallGoals] = useState([])
//   const allGoalHandler = () => {
//     SetallGoals(currentGoals => [...allGoals,goal])
//   }
//   const goalSetter = (text) => {
//     return setGoal(text)
//   }
//   const handler = () => {
//     console.log(goal)
//   }
//   return (
//     <View style={{padding: 50}}>
//       <View style={{flexDirection: "column", justifyContent: 'space-between', alignItems: 'center'}}>
//         <TextInput value={goal} onChangeText={goalSetter} placeholder="Course Goal" style={{borderColor: "black", borderWidth: 1, padding: 10, width: 250}} />
//         <Button onPress={allGoalHandler}title="ADD" />
//         <View>
//             <ScrollView>
//           {allGoals.map((goals) => <View>
//             <Text style={styles.listItem}key={goals}>{goals}</Text>
//           </View>)}
//             </ScrollView>
//         </View>
      
//       </View>
     
//     </View>
//   );
// }

function  getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default class App extends React.Component {  
    constructor(props){
      super(props)
      this.state = {
        markers: [],
        loggedIn: false
      }
      this.handleButton = this.handleButton.bind(this)
      this.handlePress = this.handlePress.bind(this)
    }
    handleButton(){
      this.setState({
        loggedIn:true
      })
    }
    handlePress(e){
      this.setState({
        markers: [...this.state.markers,
          {
            coordinate: e.nativeEvent.coordinate
          }
        ]
      },console.log(e))
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
      <MapView style={{flex: 1}} 
      initialRegion={{
        latitude: 34.022499,
        longitude: -118.394287,
        latitudeDelta: 0.0922,
        longitudeDelta: 1.0421
      }}
      showsUserLocation={true}
      onLongPress={this.handlePress}>
        {this.state.markers.map((marker) => {
          return <Marker draggable  {...marker}/>
        })}
      </MapView>   

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
 