import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';

function nothingfunc(){
  return 0;
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sailesh</Text>
      <Button title={"This does nothing"} onPress={nothingfunc}/>
      <StatusBar style="auto" />

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
