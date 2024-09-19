import React from 'react'
import { Text, StyleSheet } from 'react-native'

function ComponentTitle(props) {
  return (
    <Text style={styles.title}>{props.title} section</Text>
  )
}

export default ComponentTitle

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
        textAlign: "center",
        textTransform: "capitalize"
    }
})