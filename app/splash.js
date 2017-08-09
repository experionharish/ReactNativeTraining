
import React, { Component } from 'react';
import {
StyleSheet,
Image,
View} from 'react-native';


export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {duration: 3000};

      // Toggle the state every second
      setInterval(() => {

      }, this.state.duration);
    }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./images/splash.png')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
