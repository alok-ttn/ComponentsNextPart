/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class thirdScreen extends React.Component {
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
        <View style={[styles.child, {backgroundColor: '#4B2876',justifyContent:'center',alignItems:'center'}]}>
          <Text
            style={{
              fontSize: 25,
              paddingTop: 50,
              paddingLeft: 20,
              color: '#fff',
              justifyContent:'center'
            }}>
            {route.params.data}
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('First')}>
              <Text style={{fontSize:40,color:'white'}}>Logout</Text>
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

export default thirdScreen;
