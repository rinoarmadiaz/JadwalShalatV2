import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Header = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
        <Text style={styles.subtitleText}>{props.time}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 8,
    backgroundColor: "rgb(239,81,83)",
    aspectRatio: 2,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  titleText: {
    fontSize: 28,
    color: "rgb(255,248,222)",
  },
  subtitleText: {
    fontSize: 36,
    color: "rgb(255,248,222)",
    fontWeight: "bold"
  },
})

export default Header
