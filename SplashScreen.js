import React, { useRef, useState,useEffect } from "react";
import { DrawerLayoutAndroid, Text, StyleSheet, SafeAreaView,TouchableOpacity ,View } from "react-native";
import { Avatar ,Appbar,Button, List} from "react-native-paper";
import GoMap from './GoMap';
import { Platform, StatusBar,Image } from "react-native";
import { Fontisto } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import Drawer  from "./DrawerR";

const safeStyle=StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    borderRadius:20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
const SplashScreen = (props) => {
   const [show,setShow]=useState(false);
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const openDrawers=()=>{
    drawer.current.openDrawer()
  }
  const navigationView = () => (
   <>
    <View style={[styles.container, styles.navigationContainer]}>
     
     <Avatar.Image  style={{marginBottom:20,backgroundColor:'green'}} 
     size={120} 
      source={{uri:'https://image.shutterstock.com/image-vector/user-profile-symbol-check-mark-260nw-483856048.jpg'}}
     />
     <Text style={{color:'white',fontSize:24,fontWeight:'bold',marginTop:20}}>{props.userName}</Text>
   </View>
   <View style={{backgroundColor:'white',color:'green', flex:3}}>
  
  <List.Item
    titleStyle={{fontWeight:'bold'}}
    title="Ebirr"
    theme={{colors: {text:'green'}}}
    onPress={()=>{}}
    left={props => <List.Icon titleStyle={{color:'blue'}}  {...props} icon="credit-card" />}
  />
   <List.Item
    title="History"
    titleStyle={{fontWeight:'bold'}}
    theme={{colors: {text:'green'}}}
    onPress={()=>{}}
    left={props => <List.Icon {...props} icon="update" />}
  />

  <List.Item
    title="Pre Orders"
    theme={{colors: {text:'green'}}}
    titleStyle={{fontWeight:'bold'}}
    onPress={()=>{}}
    left={props => <List.Icon  {...props} icon="book-variant" />}
  />
  <List.Item
    title="Referral"
    theme={{colors: {text:'green'}}}
    titleStyle={{fontWeight:'bold'}}
    onPress={()=>{}}
    left={props => <List.Icon {...props} icon="tag" />}
  />
  
  <List.Item
    title="Feres Miles"
    theme={{colors: {text:'green'}}}
    titleStyle={{fontWeight:'bold'}}
    onPress={()=>{}}
    left={props => <List.Icon {...props} icon="notebook" />}
  />
  <List.Item
   theme={{colors: {text:'green'}}}
   titleStyle={{fontWeight:'bold'}}
    title="Contact Us"
    onPress={()=>{}}
    left={props => <List.Icon {...props} icon="account" />}
  />
  
  
   </View>
   </>
  );

  return (
    <SafeAreaView style={safeStyle.AndroidSafeArea}>
    
     {(<DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
        
{/*   
    <Appbar style={{backgroundColor:'white',opacity:1}}>

    <Ionicons style={{flex:6}} onPress={()=>{ drawer.current.openDrawer()}} name="person" size={52} color="green" />
     <Button style={{flex:1,borderBottomLeftRadius:40,borderTopRightRadius:40}} mode="contained" color="green">
       <Text style={{color:'white',fontWeight:'bold'}}>5% Bonus</Text>
     </Button>
    </Appbar> */}

      <GoMap opens={drawer}/>
      <Drawer/>
    </DrawerLayoutAndroid>)
    }
    </SafeAreaView>
    
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    borderRadius:10,
  },
  navigationContainer: {
    backgroundColor: "green"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  }
});

export default SplashScreen;

