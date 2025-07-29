import { Text, View, StyleSheet, Button } from "react-native";
import React, {useState} from 'react';
type GreetingProps = {
  name: string;
};
const Greeting = (props: GreetingProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Hello {props.name}</Text>
    </View>
  )
}

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You clicked {count} times </Text>
      <Button
        onPress={() => setCount(count * 5)}
        title="Click me!"
        />
      <Button
        onPress={() => setCount(1)}
        title="Decrease"
        />
    </View>
  );

};
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello!</Text>
      <App/>
      <Greeting name="Hellen"/>
      <Greeting name="Eugene" />
      <Greeting name="Fred" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: 'white',
  },
})
