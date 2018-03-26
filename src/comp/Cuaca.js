import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default class Cuaca extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '-',
        description: '-',
        temp: 0,
      }
    };
  }

getWeather= () => {
let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city +
 '&appid=1a5a634a5822c53c5e342c675c656ab2&units=metric';
  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
      }
    });
  }
);

}  
  render() {
    return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize:30}}>Aplikasi Cuaca Sederhana</Text>
        </View>
        
        <View style={styles.form}>
            <Text style={{fontSize:20}}>Masukan Nama Kota</Text>
            <TextInput style={{height:40, width:150, backgroundColor:'white'}}
              placeholder="Masukan Kota"
              onChangeText={(city)=>this.setState({city})}
            />

            <Button
              onPress={()=>this.getWeather()}
              title="Cek Cuaca"
              accessibilityLabel="Klik untuk mencari Kota"
            />
        </View>


        <View style={styles.button}>
            <Text>
              Suhu =  {this.state.forecast.temp} {"\n"}
              Cuaca =  {this.state.forecast.main} {"\n"}
              Deskripsi = {this.state.forecast.description} {"\n"}
            </Text>
        </View>

        <View style={styles.footer}>
          <Text>by Bayu Megawanta</Text>
        </View>
      
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  notif: {//bagian notif pada view
    flex: 0.5,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {//bagian header pada view
    flex: 1,
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center',
  },

  form: {//bagian slider pada view
    flex: 1,
    backgroundColor: '#00b300',
    alignItems: 'center',
    justifyContent: 'space-around',
  }, 

  button: {//bagian induk bagian button
   flex: 3,
    backgroundColor: '#008000',
    //marginLeft: 10,
    //marginRight: 10,
    flexDirection: 'row',
    //justifyContent: 'space-around',
    alignItems: 'flex-start'
   /* 
    flex: 3,
    flexDirection:'row',
    backgroundColor: '#006600',
    justifyContent: 'space-around',
    */
  },
/*
  frame: {//bagian frame bagian button
    flex: 2,
    backgroundColor: '#00ff00',
    justifyContent: 'space-around',
    flexDirection:'row',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    //marginBottom:10,
  },

  frame2: {//bagian frame bagian button
    flex: 2,
    backgroundColor: '#00ff00',
    justifyContent: 'space-around',
    flexDirection:'row',
    //marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    //marginBottom:15,
  },

  frame3: {//bagian frame bagian button
    flex: 2,
    backgroundColor: '#00ff00',
    justifyContent: 'space-around',
    flexDirection:'row',
    //marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom:15,
  },
*/
/*
  button1: {//button pertama
    flex: 2,
    backgroundColor: '#b3ffb3',
    alignItems: 'center',
    width:30,
    height: 50,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 10,
    justifyContent: 'space-around',
  },

  button2: {//button kedua
    flex: 2,
    backgroundColor: '#b3ffb3',
    alignItems: 'center',
    width: 30,
    height: 50,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
  },

  button3: {//button ketiga
    flex: 2,
    backgroundColor: '#b3ffb3',
    alignItems: 'center',
    width: 30,
    height: 50,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
  },

  button4: {//button keempat
    flex: 2,
    backgroundColor: '#b3ffb3',
    alignItems: 'center',
    width: 30,
    height: 50,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 20,
    justifyContent: 'space-around',
  },
  */

  footer: {//bagian footer
    flex: 0.5,
    backgroundColor: '#00e600',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
