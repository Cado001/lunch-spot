import { useEffect, useState, useContext } from "react";
import {  ScrollView, View } from "react-native";
import { router } from "expo-router";
import { Fab, FabLabel } from "@gluestack-ui/themed";
import RestaurantCard from "./RestaurantCard";
import { RestaurantContext } from "../app/_layout";


export default function RestaurantList(){

const [restaurants, setRestaurants ] = useState()
const { setThisRest } = useContext(RestaurantContext)







    useEffect(() => {
        fetch('https://api.bocacode.com/api/restaurants')
        .then(res => res.json())
        .then(data => setRestaurants(data))
        .catch(alert)
    }, [])


const chooseRandom = () => {
 const randomIndex =  Math.floor (Math.random() * restaurants.length)
 setThisRest(restaurants[randomIndex])
 router.push('/details')
}

    return(
        <View>

            <ScrollView>
            {restaurants && restaurants.map(rest => (
                <RestaurantCard key={rest._id} restaurant={rest}/>
                ))}
                </ScrollView>
                <Fab
                onPress ={chooseRandom}
                size="lg"
                bgColor="$blue700">
                <FabLabel>🎲 </FabLabel>
                </Fab> 
               
                </View>
    )
}