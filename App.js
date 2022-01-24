


import React, { Component } from 'react';  
 import { Platform, StyleSheet, View, Text,  
 Image, TouchableOpacity, Alert,ActivityIndicator} from 'react-native'; 
 import SplashScreen from './SplashScreen' 
 import UserForm from './UserForm';
 export default class App extends Component  
{  
   constructor(){  
     super();  
     this.state={  
     isVisible : true,  
     showHome:false
    }  
  }  
   Hide_Splash_Screen=()=>{  
    this.setState({   
      isVisible : false   
    });  
  }  
   
  componentDidMount(){  
    var that = this;  
    setTimeout(function(){  
      that.Hide_Splash_Screen();  
    }, 5000);
    
   }  
   
    render()  
    {  
        let Splash_Screen = (  
             <View style={styles.SplashScreen_RootView}>  
                 <View style={styles.SplashScreen_ChildView}>  
                       <Image style={{width:200,height:200,marginBottom:20}}
                        source={{uri:'data:image/png;base64,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'}}  
                     />  
                     <Text style={{color:'white',fontSize:50,fontWeight:'bold',marginBottom:40}}>Feres</Text>
                     <Text style={{color:'white',fontSize:30,fontWeight:'bold',marginTop:200,marginBottom:20}}>Connecting...</Text>
               <ActivityIndicator size="large" color="white" />
                </View> 
                
             </View> )  
          return(  
             <View style = { styles.MainContainer }>  
              {this.state.isVisible?Splash_Screen:<UserForm/>}
              
            </View>  
              );  
    }  
}  
 const styles = StyleSheet.create(  
{  
    MainContainer:  
    {  
        flex: 1,  
        paddingTop:20,
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
    },  
   
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:2,  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
      },  
   
    SplashScreen_ChildView:  
    {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: 'green',  
        flex:1,  
    },  
});  
//google Map key==> AIzaSyDiPePojq3a1qf9OdpGlt83l9ornm7fX2E