import React, { Component } from 'react';
import {
 StyleSheet,
 View,
 Text,
 TouchableOpacity,
 TextInput,
 ListView,
 Alert,
 ScrollView,
 Button,
 TouchableHighlight
} from 'react-native';
import { Constants, Font } from 'expo';
import { Icons } from 'react-native-fontawesome';

export default class App extends Component {
  static navigationOptions = {
    title: 'Main'
  }
  componentDidMount() {
    Font.loadAsync({
      'FontAwesome': require('./assets/fontawesome-webfont.ttf'),
    }).then(() => {
      this.setState({ fontLoaded: true })
    })
  }
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    }
  }
  render() {
    return(
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.title}>Pings</Text>
          <ScrollView>
            <Text>Example ping</Text>
          </ScrollView>
        </View>
        <View style={styles.line}></View>
        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={{marginLeft: 20, marginRight: 10, fontSize: 15, textAlign: 'left'}}>
              {this.state.fontLoaded ? (<Text style={styles.icons}>{Icons.navicon}</Text>) : null}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainButton}>
            <Text style={styles.buttonText}>Ping</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{marginLeft: 10, marginRight: 20, fontSize: 15, textAlign: 'left'}}>
              {this.state.fontLoaded ? (<Text style={styles.icons}>{Icons.envelopeOpenO}</Text>) : null}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default class Settings extends Component {
  static navigationOptions = {
    title: 'Screen'
  }

}

//Navigator
export default StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
  Users: {
    screen: UserScreen
  },
  Messages: {
    screen: MessageScreen
  }
}, {initialRouteName: 'Login'});

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
    backgroundColor: '#ccc',
  },
  // button: {
  //   flex: 2,
  //   margin: 4,
  //   backgroundColor: '#eee',
  //   borderRadius: 10,
  //   shadowColor: 'black',
  //   shadowOffset: {width: 0, height: 2},
  //   shadowRadius: 2,
  //   shadowOpacity: 1,
  // },
  mainButton: {
    flex: 2.3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 20,
    backgroundColor: '#d83434',
    borderRadius: 10,
    height: '70%',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: .4,
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
  title: {
    fontSize: 30,
  },
  icons: {
    fontFamily: 'FontAwesome',
    fontSize: 30,
  }
});
