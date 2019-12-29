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
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';

import {NavigationEvents} from 'react-navigation';

import styles from './Styles';

class AddScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      fname: '',
      lname: '',
      email: '',
      ButtonText: 'Add',
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
        (this.state.fname = ''),
        (this.state.lname = ''),
        (this.state.email = ''),
      ]);
    }
  };

  updateSubmit = e => {
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
        fname,
        lname,
        email,
      };
      console.log('data', data);
      this.props.dispatch({type: 'UPDATE', id: this.state.id, data: data});
      Alert.alert('Updated', 'user successfully updated', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.goBack();
          },
        },
        (this.state.fname = ''),
        (this.state.lname = ''),
        (this.state.email = ''),
      ]);
    }
  };

  componentWillReceiveProps() {
    console.log('rerender here', this.props.navigation.getParam('data'));
    //this.yourFunction()
    //this.setState({})
    const data = this.props.navigation.getParam('data');
    if (data) {
      this.setState({id: data.id});
      this.setState({fname: data.fname});
      this.setState({lname: data.lname});
      this.setState({email: data.email});
      this.setState({ButtonText: 'update'});
    } else {
      this.setState({fname: ''});
      this.setState({fname: ''});
      this.setState({lname: ''});
      this.setState({email: ''});
    }
  }

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
          <TouchableOpacity
            style={styles.ButtonStyle}
            activeOpacity={0.5}
            onPress={this.state.ButtonText === 'Add' ? this.handleSubmit : this.updateSubmit}>
            <Text style={styles.TextStyle}> {this.state.ButtonText} </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect()(AddScreen);
