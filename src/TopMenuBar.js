import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TopMenuBar = () => {
  return (
    <View style={{ backgroundColor: "#252525", paddingTop: 50 , flexDirection: "row", justifyContent: "space-between",padding:5 }}>
        <View style={{flex:4}}>
          <Text style={styles.textStyle}>back button</Text>
        </View>
        <View style={{flex:2, flexDirection: "row", justifyContent:"space-between" }}>
          <Text style={styles.textStyle}>Bell icon</Text>
          <Text style={styles.textStyle}>...</Text>
          <Text style={styles.textStyle}>Dp</Text>
        </View>
      </View>
  )
}

export default TopMenuBar

const styles = StyleSheet.create({
    textStyle: {
        color: 'white',
      },
});