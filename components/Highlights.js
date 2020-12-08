import React, { useEffect } from "react";
import { Card, Text, Icon } from 'react-native-elements'
import {
    Alert,
    Button
} from "react-native";

export default function Highlights() {

    const [randomDrink, setRandomDrink] = React.useState()
    let image = { uri: randomDrink.strDrinkThumb };


    function fetchData() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            .then((response) => response.json())
            .then(responseData => {
                setRandomDrink(responseData.drinks[0])
                console.log(randomDrink)
            })
            .catch((error) => {
                Alert.alert('Error', error.message)
            })
    }
    useEffect(() => {
        fetchData();
    }, []);

        return (
            <Card>
                <Card.Title>
                    {randomDrink.strDrink}
                </Card.Title>
                <Card.Divider/>
                <Card.Image 
                    source= {image}
                />
                <Text style={{marginBottom: 10}}>
                    {randomDrink.strInstructions}
                </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='KATSO' 
                    onPress={() => isLinkAvailable()}
                    color="black"
                />
            </Card>
        )
    }

