import React from 'react'
import {FlatList,StyleSheet,Text, View,TextInput,Button} from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './filmItem'

class Search extends React.Component{
    render(){
        return(
            <View style={styles.main_container}>
                <TextInput style={styles.textInput}placeholder='Nom de la ville'/>
                <Button title='Rechercher' onPress={()=>{}}/>
                <FlatList
                    data={films}
                    keyExtractor={(item)=>item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    TextInput: {
        marginLeft:5,
        marginRight:5,
        height:50,
        borderColor:'#000000',
        borderWidth:1,
        paddingLeft:5
    },
    main_container:{
        flex:1,
        marginTop:20
     
    }
})
export default Search