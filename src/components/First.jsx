import { View, Text } from 'react-native'
import React from 'react'

const First = () => {
  return (
    <View>
        <Text style={{fontSize:30,fontWeight:'bold'}}>This is First Component</Text>
    </View>
  )
}
const Second = () => {
    return (
      <View>
          <Text style={{fontSize:30,fontWeight:'bold'}}>This is Second Component</Text>
      </View>
    )
  }

export default First