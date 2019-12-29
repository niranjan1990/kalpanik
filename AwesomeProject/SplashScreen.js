import React from 'react';

import {View, Image, StyleSheet} from 'react-native';

const ffICON = require('./android/app/src/main/assets/icons/kalpanik.png');

export default class SplashScreen extends React.PureComponent {
  static navigationOptions = {
    header: null,
  };

  componentDidMount () {
    this.timeoutHandle = setTimeout(() => {
      this.props.navigation.navigate('Dashboard');
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imageStyle} source={ffICON} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  imageStyle: {
    width: 188,
    height: 188,
    position: 'absolute',
    resizeMode: 'contain',
  },
});
