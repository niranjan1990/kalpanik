import React from 'react';

import {
  View,
  TextInput,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Button,
} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';

import styles from './Styles';

class UpdateScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
    };
  }
  static navigationOptions = {
    title: 'Tasks',
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.fname.trim() === '') {
      this.setState(() => ({nameError: 'First name required.'}));
    } else {
      this.setState(() => ({nameError: null}));
      var fname = this.state.fname;
      var validFname = true;
    }

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(this.state.email) === false) {
      this.setState(() => ({emailError: 'Invalid Email Address'}));
    } else {
      this.setState(() => ({emailError: null}));
      var email = this.state.email;
      var validEmail = true;
    }

    const lname = this.state.lname;

    if (validFname === true && validEmail === true) {
      const data = {
        id: new Date(),
        fname,
        lname,
        email,
      };
      console.log('data', data);
      this.props.dispatch({
        type: 'ADD_USER',
        data,
      });
      Alert.alert('Added', 'user successfully added', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.goBack();
          },
        },
      ]);
    }
  };

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.taskForm}>
          <TextInput
            style={styles.formInput}
            onChangeText={fname => this.setState({fname})}
            value={this.state.fname}
            placeholder="Enter First Name"
          />
          {!!this.state.nameError && (
            <Text style={{color: 'red', marginLeft: 10}}>{this.state.nameError}</Text>
          )}
          <TextInput
            style={styles.formInput}
            onChangeText={lname => this.setState({lname})}
            value={this.state.lname}
            placeholder="Enter Last Name"
          />
          <TextInput
            style={styles.formInput}
            onChangeText={email => this.setState({email})}
            value={this.state.email}
            placeholder="Enter EmailId"
          />
          {!!this.state.emailError && (
            <Text style={{color: 'red', marginLeft: 10}}>{this.state.emailError}</Text>
          )}

          <Button title="Press me" onPress={this.handleSubmit} />
        </View>
      </View>
    );
  }
}

export default connect()(UpdateScreen);
