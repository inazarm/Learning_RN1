import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import styles from '../styles/style'

const Style = () => {
  return (
    <View>
      <Text style={{fontSize:20,backgroundColor:'blue', color:'white'}}>Inline Style</Text>

      <Text style={style.myText}>Internal Style</Text>

      <Text style={styles.myText}>External Style</Text>

      <Text style={[styles.myText,style.myText,{backgroundColor:'yellow'}]}>Mix Style</Text>

    </View>
  )
}

const style=StyleSheet.create({
  myText:{
    backgroundColor:'green',
    fontSize:25,
    color:'white',
    marginVertical:5,
    padding:5,
    textAlign:'center'
  }
})
export default Style