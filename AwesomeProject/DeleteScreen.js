import React from 'react';

import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {Button} from 'react-native-paper';
import {NavigationActions} from 'react-navigation';

const userIcon = require('./android/app/src/main/assets/icons/usericon.png');

class DeleteScreen extends React.PureComponent {
  static navigationOptions = {
    header: null,
  };
  componentWillReceiveProps() {
    console.log('rerender here editscreen', this.props);
  }

  renderItem = ({item}) => {
    console.log('renderItem', this.props);
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          marginTop: 10,
        }}>
        <View style={{width: '30%'}}>
          <Image style={{width: 100, height: 50, padding: 10, margin: 10}} source={userIcon} />
        </View>
        <View style={{width: '50%'}}>
          <Text style={styles.text}>
            First Name:<Text style={styles.text}>{item.fname}</Text>
          </Text>
          <Text style={styles.text}>
            Last Name:<Text style={styles.text}>{item.lname}</Text>
          </Text>
          <Text style={styles.text}>
            Email Id:<Text style={styles.text}>{item.email}</Text>
          </Text>
        </View>
        <View style={{width: '20%'}}>
          <Button
            onPress={() => {
              Alert.alert('Delete', 'deleting user', [
                {
                  text: 'OK',
                  onPress: () => {
                    this.props.dispatch({type: 'DELETE_USER', id: item.id});
                  },
                },
                ,
              ]);
            }}>
            Delete
          </Button>
        </View>
      </View>
    );
  };
  render () {
    console.log('edit users', this.props.users, this.props);
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <FlatList
            data={this.props.users}
            //renderItem={({item}) => <Item item={item} />}
            renderItem={this.renderItem.bind(this)}
            keyExtractor={item => item.id}
            navigation={this.props.navigation}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state,
  };
};

export default connect(mapStateToProps)(DeleteScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  text: {
    margin: 1,
    fontFamily: 'Verdana',
    fontSize: 18,
    color: 'black',
  },
});
