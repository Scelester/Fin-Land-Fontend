import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


import { WebView } from 'react-native-webview';
// import { useWindowDimensions } from 'react-native';
// import RenderHtml from 'react-native-render-html';






export default function App() {

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://scelester.github.io/Fin-Land-Fontend/' }}
        style={{ flex: 1 }}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
