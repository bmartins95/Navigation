import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Home } from "@/app/home"
import { Product } from "@/app/product"

const Stack = createNativeStackNavigator()

export function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home}></Stack.Screen>
            <Stack.Screen name="product" component={Product}></Stack.Screen>
        </Stack.Navigator>
    )
} 