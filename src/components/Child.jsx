import { View, Text } from 'react-native'
import React from 'react'

const Child = (props) => {
    //console.log(props);
    let count=props.data;
    let item=props.Item;
  return (
    <View>
      <Text style={{fontSize:30}}>Child Component</Text>
      <Text style={{fontSize:30}}>Counter:{count}</Text>
      <Text style={{fontSize:30}}>Items:{item}</Text>
    </View>
  )
}

export default Child