import { StyleSheet, View } from "react-native"

import { SignIn } from "./src/screens/SignIn"

export default function App() {
  return (
    <View style={styles.container}>
      <SignIn />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
