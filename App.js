import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      source={require('./assets/runat.png')}
      style={styles.heroImage}       
      />

      <View style={styles.textContainer}>
        <Text style={styles.text}>Hola Coder!!!!</Text>
        <Text style={styles.textSmall}>Texto #2 del Desafío</Text>
      </View>

      
      
      <StatusBar style="auto" />
    </View>
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  heroImage: {
    width:'100%',
    height:300,
  },
  textContainer: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#17ab98',
    height:150,
    width:'90%',
    margin:15,
    borderRadius:9

  },
  text: {
    fontSize: 35,
    color:'#2c686e', 
    fontFamily: 'sans-serif',
    textShadowColor:'#ffffff',
    textShadowOffset:{width:2.4,height:1.5},
    textShadowRadius:3    
  },
  textSmall: {
    color:'white',
    fontSize:12,
    fontWeight: '600'
   
  }
});
