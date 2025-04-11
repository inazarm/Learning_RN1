import { View, Text } from 'react-native'
import React from 'react'

const First = () => {
  let name='Nazar Muhammad'; // expression
  //below is statement 
  const age=()=>{
    return 25
  }
  return (
    <View>
        <Text style={{fontSize:30,fontWeight:'bold'}}>This is First Component developed by {name}</Text>
        <Text style={{fontSize:30,fontWeight:'bold'}}>Age is {age()}</Text>
    </View>
  )
}
// const Second = () => {
//     return (
//       <View>
//           <Text style={{fontSize:30,fontWeight:'bold'}}>This is Second Component</Text>
//       </View>
//     )
//   }

export default First