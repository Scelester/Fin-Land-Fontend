
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, BackHandler } from 'react-native';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { WebView } from 'react-native-webview';





export default function App() {
  const [pannel,setpannel] = React.useState();

  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => { return true }) 

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
