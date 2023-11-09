import { useContext } from "react"
import { Box, Image, Heading, Text, Pressable } from "@gluestack-ui/themed"
import { router } from "expo-router"
import { RestaurantContext } from "../app/_layout"

export default function RestaurantCard({ restaurant }) {

    const { setThisRest } = useContext(RestaurantContext)

    const showDetails = () => {
        setThisRest(restaurant) // putting restaurant in to data
        router.push("/details") // navigating to details page 
    }

    return (
        <Pressable onPress={showDetails}>

            <Box
                p={12}
                mb={16}
                rounded="$xl"
                bgColor="$backgroundLight50">

                <Image
                    w="$full"
                    h={160}
                    rounded="$lg"
                    alt={restaurant.name}
                    source={{ uri: restaurant.photo_url }} />
                <Heading>{restaurant.name}</Heading>
                <Text>{restaurant.address}</Text>
            </Box>
        </Pressable>

    )
} 
