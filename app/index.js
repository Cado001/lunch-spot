import { View, } from "react-native";
import RestaurantList from "../components/RestaurantList";

export default function Home() {
    return (
        <View style={{
            backgroundColor: 'skyblue',
            flex: 1,
            paddingVertical: 60,
            paddingHorizontal: 30,
        }}>
            <RestaurantList />
        </View>
    )
}
