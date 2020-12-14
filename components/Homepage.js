import React from 'react';
import { View, Alert } from 'react-native';
import { SearchBar, Button } from 'react-native-elements'
import HighlightDrink from "./Highlights"

export default function Homepage({navigation}) {
    const [ingredient, setIngredient] = React.useState('')

    const getCocktail = () => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredient)
        .then((response) => response.json())
    .then((responseData) => {
      navigation.navigate("Listpage", { data: responseData.drinks })
    })
    .catch((error) => {
      Alert.alert('Error', error)
    })
  }


  return (
      <View>
          <SearchBar 
          placeholder="Search cocktails"
          onChangeText= {value => setIngredient(value)}
          value={ingredient}
          />
          <Button 
          raised icon = {{name: 'search'}}
          onPress={getCocktail}
          title="SEARCH"       
          />
          <View>
            <HighlightDrink></HighlightDrink>
          </View>
      </View>

  )
}