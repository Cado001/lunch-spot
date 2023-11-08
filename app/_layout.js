import { useState, createContext } from "react";

import { GluestackUIProvider } from "@gluestack-ui/themed";
import { Stack } from "expo-router";
import { config } from "@gluestack-ui/config";

export const RestaurantContext = createContext(null)


export default function RootLayout() {

    const [thisRest, setThisRest] = useState()

    return (
        <GluestackUIProvider config={config}>
            <RestaurantContext.Provider value={{ thisRest, setThisRest }}>
                <Stack screenOptions={{ header: () => null }} />
            </RestaurantContext.Provider>
        </GluestackUIProvider>

    )
}