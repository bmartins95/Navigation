import { createBottomTabNavigator, BottomTabScreenProps } from "@react-navigation/bottom-tabs"

import { Home } from "@/app/home"
import { Product } from "@/app/product"

export type BottonTabRoutesList = {
    home: undefined
    product: undefined | { id: string }
}

export type BottonTabRouteProps<T extends keyof BottonTabRoutesList> = BottomTabScreenProps<BottonTabRoutesList, T>

const Tab = createBottomTabNavigator<BottonTabRoutesList>()

export function BottonRoutes() {
    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="home" component={Home}></Tab.Screen>
            <Tab.Screen name="product" component={Product}></Tab.Screen>
        </Tab.Navigator>
    )
} 