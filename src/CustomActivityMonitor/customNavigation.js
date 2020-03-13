/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      input: ' ',
      viewOpacity: 0,
    };
  }
  onChangeText() {}

  render() {
    // eslint-disable-next-line no-unused-vars
    const {navigation} = this.props;

    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => this.setState({viewOpacity: 1})}>
            <Text style={{fontSize: 40, color: 'green'}}>click to start</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#fff',
            alignItems: 'center',
            opacity: this.state.viewOpacity,
          }}>
          <Image
            style={{width: '50%'}}
            source={require('../CustomActivityMonitor/loader.gif')}
          />
        </View>
        <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => this.setState({viewOpacity: 0})}>
            <Text style={{fontSize: 40, color: 'red'}}>click to stop</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
export default Home;
