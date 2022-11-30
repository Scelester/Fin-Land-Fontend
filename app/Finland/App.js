
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, BackHandler } from 'react-native';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { WebView } from 'react-native-webview';


const runFirst = `
      true; // note: this is required, or you'll sometimes get silent failures
    `;

const runBeforeFirst = `
      window.isNativeApp = true;
      true; // note: this is required, or you'll sometimes get silent failures
  `;


export default function App() {
  const [canGoBack, setCanGoBack] = React.useState(false)
  const [canGoForward, setCanGoForward] = React.useState(false)
  const [currentUrl, setCurrentUrl] = React.useState('https://scelester.github.io/Fin-Land-Fontend/')
  const webviewRef = React.useRef(null)

  backButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goBack()
  }

  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => { backButtonHandler();return true })
  });

  return (
    <>
      <View style={{ flex: 1 }} >
        <StatusBar backgroundColor='#2A6472' />
        <WebView
          ref={webviewRef}
          source={{ uri: currentUrl }}
          style={styles.container}
          setBuiltInZoomControls={false}
          overScrollMode='never'
          nNavigationStateChange={navState => {
            setCanGoBack(navState.canGoBack)
            setCanGoForward(navState.canGoForward)
            setCurrentUrl(navState.url)
          }}
          injectedJavaScript={runFirst}
          injectedJavaScriptBeforeContentLoaded={runBeforeFirst}
        />


      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
