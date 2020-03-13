/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet,ToastAndroid, TextInput,Clipboard,Alert, BackHandler} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class SecondScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ' press again to exit',
      input:'clipboard copy',
      counter: 0,
    };
  }
onChange(input){

}
showAlert(){Alert.alert(
    'Hey There',
    'TO Exit Click Go Back',
    [
      {text: 'Go Back', onPress: () => {
        Clipboard.setString('new content copy'),
        this.getContent();
        this.props.navigation.goBack()}
      , style: 'cancel'},
    ],
  );
}

componentDidMount(){
    BackHandler.addEventListener(
        'hardwareBackPress',
        ()=>{this.setState({
          counter:this.state.counter+1
        })
        setTimeout(()=>{this.setState({counter: 0})}, 2000)
        if(this.state.counter===1)
        {
          ToastAndroid.showWithGravity(this.state.text, 2000,ToastAndroid.BOTTOM)
        }
        if(this.state.counter===2)

        this.showAlert();
            return true;}
        );
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textInput}>{this.state.input}</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f00',
    flex: 1,
    // alignItems:"flex-end",
    justifyContent: 'center',
  },
  child: {
    //height: 100,
    width: '100%',
    flex: 1,
  },
  textInput:{
    fontSize:20,
    justifyContent:'center',
    alignSelf:'center',
  },
});

export default SecondScreen;
