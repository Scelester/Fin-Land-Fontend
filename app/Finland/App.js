import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Mainpage} from './template/mainpage';




export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sailesh</Text>
      <Button title={"This does nothing"} />
      <Mainpage/>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
