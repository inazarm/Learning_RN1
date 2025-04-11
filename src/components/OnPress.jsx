import { View, Text, Button } from 'react-native'
import React from 'react'

const OnPress = () => {

  let name='Nazar Muhammad';
    // const getName=(name)=>{
    //   name="Nazar updated";
    //     console.warn("My is "+name);
    // }
    const getName=()=>{
      name='Nazar updated';
        console.warn('Name is ',name);
    }
  return (
    <View>
      <Text style={{fontSize:30}}>{name}</Text>
      
      {/* calling fuction without parameters */}
      {/* <Button title='Press' onPress={getName}/>*/}

      {/* calling funtion with parameter */}
      {/* <Button title='Press' onPress={()=>getName("Nazar")}/> */}
      <Button title='Press' onPress={getName}/>
    </View>
  )
}

export default OnPress