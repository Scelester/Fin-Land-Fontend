import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';

import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';


const homesource =	{
	html:`
	<p>This is a test</p>
	`
	}



export default function App() {

	const {width} = useWindowDimensions();	
  return (
    <View style={styles.container}>
      <Text>Sailesh</Text>
      <Button title={"This does nothing"} />

	  <RenderHtml contentWidth={width}
					source={homesource}
					/>

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
