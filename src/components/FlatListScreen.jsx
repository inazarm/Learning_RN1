import { View, Text,StyleSheet, FlatList } from 'react-native'
import React from 'react'

const data=[
    {id:1,title:'Item-1'},
    {id:2,title:'Item-2'},
    {id:3,title:'Item-3'},
    {id:4,title:'Item-4'},
    {id:5,title:'Item-5'},
    {id:6,title:'Item-6'},
    {id:7,title:'Item-7'},
    {id:8,title:'Item-8'},
    {id:9,title:'Item-9'},
    {id:10,title:'Item-10'},
    {id:11,title:'Item-11'},
    {id:12,title:'Item-12'}
]
const FlatListScreen = () => {
    const renderItem=({item})=>(
        <View style={style.item}>
            <Text style={style.title}>{item.title}</Text>
        </View>
    );
  return (
    <View style={style.container}>
      <Text style={style.txtStyle}>FlatList works only on array form data</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
        contentContainerStyle={style.list}
      />
    </View>
  )
}

const style=StyleSheet.create({
    txtStyle:{
        fontSize:25,
        backgroundColor:'skyblue',
        color:'white',
        fontWeight:'bold',
        textAlign:'center'
    },
    container:{
        backgroundColor:'#f8f8f8',
        paddingTop:15
    },
    list:{
        paddingHorizontal:20,
    },
    item:{
        backgroundColor:'crimson',
        borderWidth:5,
        borderColor:'yellow',
        padding:20,
        marginVertical:8,
        borderRadius:8,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.1,
        shadowRadius:4,
        elevation:2

    },
    title:{
        color:'#fff',
        fontSize:18
    }
});
export default FlatListScreen