import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  taskForm: {
    justifyContent: 'center',
    //padding: 20,
    backgroundColor: '#ffffff',
  },
  formInput: {
    height: 40,
    width: 300,
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  ButtonStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#009688',
    borderRadius: 5,
    marginBottom: 20,
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});
