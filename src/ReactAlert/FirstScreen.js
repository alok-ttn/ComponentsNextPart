/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class FirstScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     text:'',
     nextScreen:'',
    };
  }
addString=(txt)=>{
  this.setState({
    nextScreen:txt
  })
}

  render() {
    const {navigation} = this.props;
    const {text,nextScreen} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.child}>
          <Text
            style={styles.textStyle}>
            {text} </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('SecondScreen',{newHandler:this.addString})}>
              <Text style={styles.textChild}>proceed {text}{nextScreen}</Text>
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
    backgroundColor: '#4B2875',
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{
    fontSize: 25,
    paddingTop: 50,
    paddingLeft: 20,
    color: '#fff',
    justifyContent:'center',

  },
  textChild:{
    fontSize:40,
    color:'white',
  },
});

export default FirstScreen;
