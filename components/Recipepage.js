import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Alert } 
from 'react-native';

export default function RecipeScreen({ route, navigation }) {

    const { propsItem } = route.params;
    let ID = propsItem.item.idDrink;
    const [isReady, setReady] = useState(false)
    const [recipeById, setRecipeById] = useState()
    
    // let image = { uri: propsItem.item.strDrinkThumb };

    function fetchRecipeById(){
        fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + ID)
        .then((response) => response.json())
        .then((responseData) => {
          setRecipeById(responseData.drinks[0])
          console.log(responseData.drinks[0])
        })
        .then(data => setReady(true))
        .catch((error) => {
          Alert.alert('Error', error.message)
        });
    }

    useEffect(() => {
        fetchRecipeById();
      }, []); 

    if (isReady === true){
      return(
          <View style={styles.RecipepageContainer}>
              <Image
                style={styles.Image}
                source={image}
                progressiveRenderingEnabled={true}
              />
              <Text>{recipeById.strDrink}</Text>
          </View>
      )
    } else {
      return(
        <View style={styles.RecipepageContainer}>
            <Text>loading...</Text>
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
      flex: 1,
    
    },
    Infobox: {
      padding: 5,
    },
  });