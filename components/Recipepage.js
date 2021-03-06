import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Alert } 
from 'react-native';

export default function RecipeScreen({ route }) {

    const { propsItem } = route.params;
    let ID = propsItem.item.idDrink;
    const [isReady, setReady] = React.useState(false)
    const [recipeById, setRecipeById] = React.useState()
    
    let image = { uri: propsItem.item.strDrinkThumb };

    function fetchRecipeById(){
        fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + ID)
        .then((response) => response.json())
        .then((responseData) => {
          setRecipeById(responseData.drinks[0])
        })
        .then(data => setReady(true))
        .catch((error) => {
          Alert.alert('Error', error.message)
        });
    }

    useEffect(() => {
        fetchRecipeById();
      }, []); 

      if (isReady === true) {
      let ingredients = []
        for (let entry of Object.entries(recipeById)) {
            if (entry[0].includes("strIngredient")) {
                ingredients.push(entry[1]);
            }
        }
        const cleanedIngrArray =  ingredients.filter(e =>  e);

        let measures = []
        for (let entry of Object.entries(recipeById)) {
          if (entry[0].includes("strMeasure")) {
            measures.push(entry[1])
          }
        }

        const cleanedMeasArray = measures.filter(e => e)

      return(
          <View style={styles.RecipepageContainer}>
              <Image
                style={styles.Image}
                source={image}
                progressiveRenderingEnabled={true}
              />
            <View style={styles.Infobox}>
              <Text style={{padding: 10}}>{recipeById.strDrink}</Text>
              <View style={{flexDirection: 'row'}}>
              <View>
                { cleanedIngrArray.map((item, key) => ( 
                <Text key={key}> { item } </Text>)
                )}
              </View>
              <View>
                { cleanedMeasArray.map((item, key) => ( 
                <Text key={key}> { item } </Text>)
                )}
              </View>
              </View>
              <Text style={{padding: 10}}>{recipeById.strInstructions}</Text>
              </View>

          </View>
      )
    } else {
      return(
        <View style={styles.RecipepageContainer}>
            <Text>Loading...</Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    RecipepageContainer: {
      flex: 1,
    },
    ActivityIndicator: {
      flex: 1,
    },
    Image: {
      flex: 1.5,
    
    },
    Infobox: {
      padding: 10,
      flex: 1
    },
  });