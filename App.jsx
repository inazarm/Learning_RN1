import { View, Text,Button } from 'react-native'
import React from 'react'
import ContactListScreen from './src/screens/Contact/ContactListScreen'
// import OnPress from './src/components/OnPress'
// import UseStateHook from './src/components/UseStateHook'
// import Props from './src/components/Props'
// import InputText from './src/components/InputText'
// import Style from './src/components/Style'
// import FlatListScreen from './src/components/FlatListScreen'
// import SectionListScreen from './src/components/SectionListScreen'
// import LoginForm from './src/components/LoginForm'

// import First from './src/components/first'

const App = () =>{
    return(
        <View>
        {/* <Text style={{fontSize:30,fontWeight:'bold'}}>This is First component</Text> */}
        {/* <OnPress/> */}
        {/* <UseStateHook/>  */}
        {/* <Props/> */}
        {/* <InputText/> */}
        {/* <Style/> */}
        {/* <FlatListScreen/> */}
        {/* <SectionListScreen/> */}
        {/* <LoginForm/> */}
        <ContactListScreen/>
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