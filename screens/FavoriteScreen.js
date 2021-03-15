import React from "react";
import {View, Text, Platform} from 'react-native'
import Color from "../constant/Color";

const FavoriteScreen = (props) => {
    return(
        <View>
            <Text>Favorite Screen</Text>
        </View>
    )
}

export const FavoriteScreenOption = (navData) =>{
    return{
        headerTitle: "Favorite Screen",
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Color.primaryColor,
        headerLeft: null,
        headerTitleStyle:{
            fontFamily: "open-sans-bold"
        },
        headerBackTitleStyle:{
            fontFamily: "open-sans"
        }
    }
}

export default FavoriteScreen