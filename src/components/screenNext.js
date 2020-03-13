/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BaseRouter } from '@react-navigation/native';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      input: ' ',
    };
  }
  onChangeText() {}

  render() {
    const {navigation,route} = this.props;

    return (
      <View style={styles.container}>
        <View style={[styles.child, {backgroundColor: '#4B2875',justifyContent:'center',alignItems:'center'}]}>
        <Text style={{fontSize:40,color:'white'}}>Final Value Displayed</Text>
          <Text
            style={{
              fontSize: 30,
              paddingTop: 50,
              paddingLeft: 20,
              color: 'red',
              justifyContent:'center'
            }}>
            {route.params.data}
          </Text>

          <TouchableOpacity onPress={()=>navigation.navigate('FlatModal')}>
                <Text style={{fontSize:20,color:'white',marginTop:50}}>Press here to go back</Text>
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

export default Home;
