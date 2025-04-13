import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const UseStateHook = () => {
  const [name,setName]=useState("Nazar");
  //recomended style to update value
  const updateValue=()=>{
    setName("Nazar Muhammad");
  }
  return (
    <View>
      <Text style={{fontSize:30}}>UserState Hooks</Text>
      <Text style={{fontSize:30}}>Name : {name}</Text>
      {/* <Button title='Press' onPress={()=>setName("Nazar Muhammad")}/> //Not recomended way to assign value here... */}
      <Button title='Press' onPress={updateValue}/> //Not recomended way to assign value here...

    </View>
  )
}

export default UseStateHook