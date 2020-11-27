import React from 'react'
import {View,TextInput,Button} from 'react-native'
class Search extends React.Component{
    render(){
        return(
            <View style={{marginTop: 40}}>
                <TextInput placeholder='Nom de la ville'/>
                <Button title='Rechercher' onPress={()=>{}}/>
            </View>
        )
    }
}
export default Search