import { createBottomTabNavigator, BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { MaterialIcons } from "@expo/vector-icons"

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
            screenOptions={{
                headerShown: false,
                tabBarLabelPosition: "below-icon",
            }}
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size}></MaterialIcons>
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="product"
                component={Product}
                options={{
                    tabBarLabel: "Product",
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="add-circle" color={color} size={size}></MaterialIcons>
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    )
} 