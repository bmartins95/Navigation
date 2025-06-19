import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Home } from "@/app/home"
import { Product } from "@/app/product"

export type StackRoutesList = {
    home: undefined
    product: undefined
}

export type StackRouteProps<T extends keyof StackRoutesList> = NativeStackScreenProps<StackRoutesList, T>

const Stack = createNativeStackNavigator<StackRoutesList>()

export function StackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="home"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="home" component={Home}></Stack.Screen>
            <Stack.Screen name="product" component={Product}></Stack.Screen>
        </Stack.Navigator>
    )
} 