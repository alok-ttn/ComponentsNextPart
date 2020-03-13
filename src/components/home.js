/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={[styles.child, {backgroundColor: '#4B2875'}]}>
          <Text
            style={{
              fontSize: 25,
              paddingTop: 50,
              paddingLeft: 20,
              color: '#fff',
            }}>
            Recharge
          </Text>
        </View>

        <View
          style={[
            styles.child,
            {backgroundColor: '#fff'},
            {width: '95%',marginLeft:'2.5%',position:'relative',marginTop:-50,borderRadius:10},
          ]}>
            <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center',marginTop:10}}>Enter Amount</Text>
            <Text style={{fontSize:15,textAlign:'center',marginTop:10,color:'#9494B8'}}>Recommended Recharge</Text>
            <TextInput placeholder="₹ 999" placeholderTextColor="#000" style={{padding:4,fontSize:45,borderBottomColor:'#00f',borderBottomWidth:2,alignSelf:'center',marginTop:20,fontWeight:'bold'}}></TextInput>
            {/* <Button title="Proceed to Payment" backgroundColor="#f0f" style={{color:'#f0f'}}></Button> */}
            <TouchableOpacity onPress={()=>navigation.navigate('Confirmation')}>
            <Text style={
              {alignSelf:'center',backgroundColor:'#DB326C',color:'#fff',fontSize:20,padding:10,marginTop:8}
            }>Proceed to Payment</Text>
            </TouchableOpacity>
        </View>


        <View style={[
            styles.child,
            {backgroundColor: '#E3DFDE'},
            {width: '95%',marginTop:10,marginLeft:'2.5%',flexDirection:'row',flex:0.2},
          ]}>
            <Text style={{fontSize:15,fontWeight:'bold',marginTop:15}}>Recommended plans</Text>
            <Text style={{fontSize:15,marginTop:15,marginHorizontal:'30%',color:'#00f'}}>View all plans > </Text>
          </View>



        <View style={[styles.child, {backgroundColor: '#fff',width: '95%',marginLeft:'2.5%',marginTop:10,marginBottom:20,borderRadius:10}, {flex: 2}]}>
              <Text style={{padding:10,marginTop:20,fontSize:20,fontWeight:'bold'}}>Unlimited Data</Text>
                  <View style={[styles.child, {flexDirection:'row',backgroundColor: '#fff',width: '95%',marginLeft:'2.5%',flex:0.5,borderBottomColor:'#000',borderBottomWidth:1}]}>
                  <Text style={{fontSize:15,marginTop:'7%'}}> Validity {'\n'} 30 days </Text>
                   <Text style={{fontSize:15,marginTop:'7%'}}>    | Speed {'\n'}    | 50 Mbps</Text>


                  </View>
                <Text style={{padding:10,marginTop:20,fontSize:20,fontWeight:'bold'}}>Unlimited Data</Text>

                <View style={[styles.child, {flexDirection:'row',backgroundColor: '#fff',width: '95%',marginLeft:'2.5%',flex:0.5}]}>
                <Text style={{fontSize:15,marginTop:'7%'}}> Validity {'\n'} 30 days </Text>
                <Text style={{fontSize:15,marginTop:'7%'}}>    | Speed {'\n'}    | 50 Mbps</Text>

                </View>

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
