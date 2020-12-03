import {StatusBar} from "expo-status-bar";
import React from "react";
import Cocktail from './Cocktail'

import {
    StyleSheet,
    View,
    FlatList,
    Alert,
    ActivityIndicator,
} from "react-native";

export default function Recipepage({navigation, route}) {
    const [cocktailList, setCocktailList] = React.useState([]);
    const [listItemsKeep, setListItemsKeep] = React.useState([]);
    const [isReady, setReady] = React.useState(true);

    const { data } = route.params

    React.useEffect(() => {
        setCocktailList(data)
        setListItemsKeep(data)
      }, [])

    const renderItem = (item) => {
        return <Cocktail item={item}/>;
    };

    return (
        <View style={styles.CocktailListContainer}>
          <View style={{margin:10}}>
            </View>
            <FlatList
                style={{marginLeft: 10}}
                data={cocktailList}
                keyExtractor={(item) => item.idDrink}
                renderItem={({item}) => renderItem(item)}
            ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    CocktailListContainer: {
        flex: 1,
        marginTop: 30,
    },
    ActivityIndicator: {
        flex: 1,
    },
});