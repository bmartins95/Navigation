import { createDrawerNavigator, DrawerScreenProps } from "@react-navigation/drawer"
import { MaterialIcons } from "@expo/vector-icons"

import { Home } from "@/app/home"
import { Product } from "@/app/product"

export type DrawerRoutesList = {
    home: undefined
    product: undefined | { id: string }
}

export type DrawerRouteProps<T extends keyof DrawerRoutesList> = DrawerScreenProps<DrawerRoutesList, T>

const Drawer = createDrawerNavigator<DrawerRoutesList>()

export function DrawerRoutes() {
    return (
        <Drawer.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Drawer.Screen
                name="home"
                component={Home}
                options={{
                    drawerLabel: "Home",
                    drawerIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size}></MaterialIcons>
                }}
            ></Drawer.Screen>
            <Drawer.Screen
                name="product"
                component={Product}
                options={{
                    drawerLabel: "Product",
                    drawerIcon: ({ color, size }) => <MaterialIcons name="add-circle" color={color} size={size}></MaterialIcons>
                }}
            ></Drawer.Screen>
        </Drawer.Navigator>
    )
} 