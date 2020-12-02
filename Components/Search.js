import React from 'react'
import {StyleSheet, View, TextInput, Button} from 'react-native'

class Search extends React.Component {
    // render () {} équivaut render = function() {}
    render() {
        return (
            <View style={{marginTop: 30}}>
                <TextInput style={styles.textinput} placeholder='chercher'/>
                <Button title="Rechercher" onPress={() => {}}/>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    }
})



export default Search