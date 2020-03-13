/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TextInput,Alert, BackHandler} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class SecondScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ' ',
      input: ' ',
    };
  }
onChange(input){

}
showAlert(){Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    { cancelable: false }
  );
}

componentDidMount(){
    BackHandler.addEventListener(
        'hardwareBackPress',
        ()=>{
            this.showAlert();
            return true;
        })
}
  render() {
    const {
      navigation,
      route 
    } = this.props;
    const { text,input}=this.state;

    return (
      <View style={styles.container}>
        <View style={[styles.child, {backgroundColor: '#4B2875',justifyContent:'center',alignItems:'center'}]}>
          <TextInput style={{width:200,height:50,backgroundColor:'#f00'}} onChangeText={(txt)=>this.setState({
            input:txt
          })}>
 
          </TextInput>
          <TouchableOpacity onPress={()=>{
            const newHandler = route.params.newHandler;
            //   console.warn({input})
            newHandler(input)
            navigation.goBack()
          }}>
              <Text style={{fontSize:40,color:'white'}}>press</Text>
          </TouchableOpacity>
        </View>

        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3DFDE',
    flex: 1,
    // alignItems:"flex-end",
    justifyContent: 'center',
  },
  child: {
    //height: 100,
    width: '100%',
    flex: 1,
  },
});

export default SecondScreen;
