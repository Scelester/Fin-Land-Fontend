import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,BackHandler } from 'react-native';


import { useEffect } from 'react';
import { WebView } from 'react-native-webview';
// import RenderHtml from 'react-native-render-html';





export default function App() {

  useEffect(()=>{
    BackHandler.addEventListener("hardwareBackPress",()=>{return false});

    ()=>{BackHandler.removeEventListener("hardwareBackPress",true)};
  });

  return (
    <>
    <View style={{ flex: 1 }} >
      <StatusBar backgroundColor='#2A6472' />
      <WebView
      useWebView2={true}
        source={{ uri: 'https://scelester.github.io/Fin-Land-Fontend/' }}
        style={styles.container}
        setBuiltInZoomControls={false}
        overScrollMode='never'
      />
      <Stack.Screen name="Home" component={the} />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
