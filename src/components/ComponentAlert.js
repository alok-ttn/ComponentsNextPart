/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';

class ComponentAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      input: ' ',
    };
  }
  checkSwitch = id => {
    switch (id) {
      case 1:
        Alert.alert('Top Left Image Pressed');
        break;
      case 2:
        Alert.alert('Top Right Image Pressed');
        break;
      case 3:
        Alert.alert('Bottom Left Image Pressed');
        break;
      case 4:
        Alert.alert('Bottom Right image pressed');
        break;
      case 5:
        Alert.alert('Center Button Pressed');
        break;
    }
  };

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.child, {alignItems: 'flex-start'}]}>
          <TouchableOpacity onPress={() => this.checkSwitch(1)}>
            <Image
              style={styles.imageformat}
              source={require('./resources/images/image.jpeg')}
            />
          </TouchableOpacity>
          <Text
            style={{fontSize: 40, textAlign: 'center', alignSelf: 'center'}}>
            Top{' '}
          </Text>
          <TouchableOpacity onPress={() => this.checkSwitch(2)}>
            <Image
              style={styles.imageformat}
              source={require('./resources/images/image.jpeg')}
            />
          </TouchableOpacity>
        </View>

        <View style={[styles.child, {alignItems: 'center'}]}>
          <Text style={{fontSize: 40}}>Left</Text>
          <Button
            title="Click to Login"
            color="#f194ff"
            backgroundColor="#f00"
            onPress={() => {
              navigation.navigate('Recharge');
            }}
          />
          <Text style={{fontSize: 40}}>Right</Text>
        </View>

        <View style={[styles.child, {alignItems: 'flex-end'}]}>
          <TouchableOpacity onPress={() => this.checkSwitch(3)}>
            <Image
              style={styles.imageformat}
              source={require('./resources/images/image.jpeg')}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 40, alignSelf: 'center'}}>Bottom</Text>
          <TouchableOpacity onPress={() => this.checkSwitch(4)}>
            <Image
              style={styles.imageformat}
              source={require('./resources/images/image.jpeg')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  componentDidMount() {
    //console.warn('Hello I am ComponentDidMount');
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fffdd0',
    flex: 1,
    // alignItems:"flex-end",
    justifyContent: 'space-between',
    // justifyContent: 'space-between',
  },
  child: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageformat: {width: 100, height: 100, resizeMode: 'cover'},
});

export default ComponentAlert;
