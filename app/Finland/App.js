
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View, BackHandler,ToastAndroid} from 'react-native';
import React from 'react';
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

  const backButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goBack()
  }
  const forwardButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goForward();
  }
  // for exit in double back press and back button navigation
  const [exitApp, setExitApp] = React.useState(0);
  const backAction = () => {
    setTimeout(() => {
      setExitApp(0);
    }, 500); // 2 seconds to tap second-time

    if (exitApp === 0) {
      setExitApp(exitApp + 1);
      backButtonHandler();
      ToastAndroid.show("Press back button again to exit",500);
    } else if (exitApp === 1) {
      BackHandler.exitApp();
    }
    return true;
  };

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  });

  return (
    <>
      <View style={{ flex: 1 }} >
        <StatusBar backgroundColor='#2A6472' />
        <WebView
          ref={webviewRef}
          source={{ uri: "https://scelester.github.io/Fin-Land-Fontend/" }}
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
