import { Box, Image, Heading, Text, Pressable } from "@gluestack-ui/themed"
import { Link } from "expo-router"

export default function RestaurantCard({ restaurant }) {
    return (
        <Link href="/details" asChild>
            <Pressable>

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
        </Link>
    )
} 
