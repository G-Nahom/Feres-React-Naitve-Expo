import React from 'react';
import {View,Text,SafeAreaView} from 'react-native';
import {List} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const Drawer =()=>{
   return(
       <>
       <View style={{justifyContent:'center'}}>
       
           <Text style={{fontSize:30,fontWeight:'bold',color:'green'}}>
           <Ionicons onPress={()=>{ drawer.current.openDrawer()}} name="car-outline" size={52} color="green" />
    
               Where To?</Text>
       <List.Item
    titleStyle={{fontWeight:'bold'}}
    title="A2"
    description="Addis Ababa"
    onPress={()=>{}}
    left={props => <List.Icon titleStyle={{color:'blue'}}  {...props} icon="map-marker" />}
  />
  <List.Item
    titleStyle={{fontWeight:'bold'}}
    title="Bole International Airport"
    description="Addis Ababa"
    onPress={()=>{}}
    left={props => <List.Icon titleStyle={{color:'blue'}}  {...props} icon="map-marker" />}
  />
  <List.Item
    titleStyle={{fontWeight:'bold'}}
    title="Ring Road"
    description="Addis Ababa"
    onPress={()=>{}}
    left={props => <List.Icon titleStyle={{color:'blue'}}  {...props} icon="map-marker" />}
  />
       </View>
       </>
   )
}

export default Drawer;