import React from 'react';
import { View, Alert } from 'react-native';
import { SearchBar, Button } from 'react-native-elements'
import HighlightDrink from "./Highlights"

export default function Homepage({navigation}) {
    const [ingredient, setIngredient] = React.useState('')
    const [drinks, setDrinks] = React.useState([])

    const getCocktail = () => {
        console.log(drinks)
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredient)
        .then((response) => response.json())
    .then((responseData) => {
      setDrinks(responseData.drinks)
      console.log(drinks)
    })
    .catch((error) => {
      Alert.alert('Error', error)
    })
    navigation.navigate("Listpage", { data: drinks })
  }

  return (
      <View>
          <SearchBar 
          placeholder="Search cocktails"
          onChangeText={setIngredient}
          value={ingredient}
          />
          <Button 
          raised icon = {{name: 'search'}}
          onPress={getCocktail}
          title="search"       
          />
          <View>
            <HighlightDrink></HighlightDrink>
          </View>
      </View>

  )
}