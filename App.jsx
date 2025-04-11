import { View, Text,Button } from 'react-native'
import React from 'react'
import OnPress from './src/components/OnPress'
// import First from './src/components/first'

const App = () =>{
    return(
        <View>
        {/* <Text style={{fontSize:30,fontWeight:'bold'}}>This is First component</Text> */}
        <OnPress/>
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