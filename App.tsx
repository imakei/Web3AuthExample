/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Web3Auth, {
  LOGIN_PROVIDER,
  OPENLOGIN_NETWORK,
} from '@web3auth/react-native-sdk';
import * as WebBrowser from '@toruslabs/react-native-web-browser';

const App = () => {
  // @ts-ignore
  global.Buffer = global.Buffer || require('buffer').Buffer;

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const web3auth = new Web3Auth(WebBrowser, {
    // Your clientId obtained from Web3Auth dashboard.
    clientId:
      'BGaURHSSOEL18o1eS-aLeh0XXZBKX7rkQ1LMYIZbXWZhUY3W-dh3FPXy3ZIdrclV0abLXRvZZQFM4x9VSgwzYKs',
    network: OPENLOGIN_NETWORK.TESTNET,
  });

  const onPressBtn = () => {
    web3auth
      .login({
        loginProvider: LOGIN_PROVIDER.GOOGLE,
        redirectUrl: 'com.example.web3auth://auth',
      })
      .then(state => {
        console.log(state.userInfo);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Button onPress={onPressBtn} title="Login" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
