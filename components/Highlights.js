import React, { useEffect } from "react";
import { Card, Text, Icon } from 'react-native-elements'
import { Alert, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Highlights() {

    const [randomDrink, setRandomDrink] = React.useState()
    const [isReady, setReady] = React.useState(false)

    const navigation = useNavigation();

    function fetchData() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            .then((response) => response.json())
            .then(responseData => {
                setRandomDrink(responseData.drinks[0])
            })
            .then(data => setReady(true))
            .catch((error) => {
                Alert.alert('Error', error.message)
            })
    }
    useEffect(() => {
        fetchData();
    }, []);

    if (isReady === true) {

        return (
            <Card>
                <Card.Title>
                    {randomDrink.strDrink}
                </Card.Title>
                <Card.Divider/>
                  <Card.Image 
                    source= {{uri: randomDrink.strDrinkThumb}}
                />  
                <Text style={{marginBottom: 10}}>
                    {randomDrink.strInstructions}
                </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='CHECK OUT' 
                    onPress={() => navigation.navigate("RandomRecipepage", { data: randomDrink })}
                    color="black"
                />
            </Card>
        ) } else {
            return(
                <Card>
                    <Text>Loading...</Text>
                </Card>
            )
        }
    }

