/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TextInput, Image,Alert, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class firstScreen extends React.Component {
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
    console.log(this.props)
    //const {text} =this.state;
    return (
      <View style={styles.container}>
        <View style={[styles.child, {backgroundColor: '#4B2875',justifyContent:'center',alignItems:'center'}]}>
          <Text
            style={{
              fontSize: 25,
              paddingTop: 50,
              paddingLeft: 20,
              color: '#fff',
              justifyContent:'center',
            }}>
            {text} </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Second',{newHandler:this.addString})}>
              <Text style={{fontSize:40,color:'white'}}>proceed {text}{nextScreen}</Text>
          </TouchableOpacity>
          {/* <TextInput style={{height:50,width:200,backgroundColor:'red'}}
              onChangeText={(txt)=>this.setState({
                text: txt
              })}>
          </TextInput> */}
          {/* <TouchableOpacity onPress={()=>}> 
            <Text> Press here</Text>
          </TouchableOpacity> */}
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

export default firstScreen;
