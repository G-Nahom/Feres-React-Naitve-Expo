;
import MapView from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import { Platform,Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import {Button} from 'react-native-paper';
import { Fontisto } from '@expo/vector-icons'; 
import * as Linking from "expo-linking";
import * as Location from 'expo-location';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
const GoMap = (props) => {
    const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  let latitude=null;
  let longitude=null
  const [mapRegion, setmapRegion] = useState({
    latitude:	9.005401 ,
    longitude: 38.763611,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  ;
  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
        'un able to access location');
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
       let coord;
      if (errorMsg) {
        coord = errorMsg;
       } else if (location) {
        coord =location.coords;
         latitude=coord.latitude;
         longitude=coord.longitude;
         setmapRegion(
             {
                latitude:coord.latitude ,
                longitude: coord.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
             }
         )
         //39a097c39f1041e7926fa8da53c79c5a
       }
    })();

  }, []);
  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
    
      <MapView
        style={{ marginLeft:10,marginRight:10,
            backgroundColor:'gray', 
            alignSelf: 'stretch', height: '100%' }}
            initialRegion={mapRegion}
       >
        {mapRegion.latitude&&<Marker coordinate = {{latitude:mapRegion.latitude,longitude:mapRegion.longitude}}
         pinColor = {"purple"} 
         title={"title"}
         description={"description"}/>}
      </MapView>
      <TouchableOpacity
     style={{
      width: 250,
      position: 'absolute',
      left:0,
      top:0,
      height:50,
    }}
  >
  <Ionicons
   style={{backgroundColor:'green', textAlign:'center', width:50,borderRadius:80}}
  onPress={()=>{
   if(props.opens){
      props.opens.current.openDrawer();
   }
  }} name="person" size={42} color='white' />
  </TouchableOpacity>
  
  <TouchableOpacity
    style={{
      position: 'absolute',
      width: 130,
      top:0,
      right:1,
      height:50,
      borderBottomLeftRadius:40,
      borderTopRightRadius:40
    }}
  >
   <Button uppercase={false} style={{borderBottomLeftRadius:40,borderTopRightRadius:40}} mode="contained" color="green">
       <Text style={{color:'white',fontWeight:'900'}}>+5% Bonus</Text>
     </Button>
  </TouchableOpacity>
      <TouchableOpacity
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      position: 'absolute',
      right:0,
      top:245,
      bottom:200,
      height:50,
      borderRadius: 100,
    }}
  >
  <Fontisto onPress={()=>{
    Linking.openURL(`tel:6090}`)
  }} name="phone" size={24} color="green" />
  </TouchableOpacity>
      </View>
    {/* <View style={{flex:0.001,justifyContent:'center',alignItems:'center'}}>
    <Ionicons onPress={()=>{ drawer.current.openDrawer()}} name="car-outline" size={10} color="green" />
      
    </View> */
    }
    </View>
  );
};
export default GoMap;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row'
  },
});