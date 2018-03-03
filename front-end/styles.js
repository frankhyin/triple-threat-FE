import StyleSheet from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  container: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 20
  },
  line: {
    height: '.2%',
    backgroundColor: 'gray'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#eee',
  },
  button: {
    flex: 2,
    margin: 4,
    backgroundColor: '#eee',
    borderRadius: 10,
    // shadowColor: 'black',
    // shadowOffset: {width: 0, height: 2},
    // shadowRadius: 2,
    // shadowOpacity: 1,
  },
  mainButton: {
    flex: 2.3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    color: 'white',
    backgroundColor: 'red',
    borderRadius:10,
    height: '70%',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: .4,
  },
  buttonText: {
    fontSize: 18
  }
});

export default styles;
