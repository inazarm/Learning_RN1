import { View, Text,Button } from 'react-native'
import React from 'react'
import OnPress from './src/components/OnPress'
import UseStateHook from './src/components/UseStateHook'
import Props from './src/components/Props'

// import First from './src/components/first'

const App = () =>{
    return(
        <View>
        {/* <Text style={{fontSize:30,fontWeight:'bold'}}>This is First component</Text> */}
        {/* <OnPress/> */}
        {/* <UseStateHook/>  */}
        <Props/>
    </View>
    )
}

// const NewComponent =()=>{
//     return(
//         <View>
//         <Text style={{fontSize:30,fontWeight:'bold'}}>This is Second Component</Text>
        
//     </View>
//     )
// }

export default App