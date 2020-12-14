import React from 'react';
import { View, Text, StyleSheet, Image } 
from 'react-native';

export default function RecipeScreen({ route }) {

    const { data } = route.params;
    let ID = data.idDrink;
    let image = { uri: data.strDrinkThumb };

      let ingredients = []
        for (let entry of Object.entries(data)) {
            if (entry[0].includes("strIngredient")) {
                ingredients.push(entry[1]);
            }
        }
        const cleanedIngrArray =  ingredients.filter(e =>  e);

        let measures = []
        for (let entry of Object.entries(data)) {
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
              <Text style={{padding: 10}}>{data.strDrink}</Text>
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
              <Text style={{padding: 10}}>{data.strInstructions}</Text>
              </View>

          </View>
      )
    
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