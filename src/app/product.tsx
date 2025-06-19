import { View } from "react-native";

import { StackRouteProps } from "@/routes/stack-routes";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { DrawerRouteProps } from "@/routes/drawer-routes";

import { ButtonIcon } from "@/components/button-icon";
import { Header } from "@/components/header";
import { Title } from "@/components/title";

export function Product({ navigation, route }: DrawerRouteProps<"product">) {

    return (
        <View style={{ flex: 1, padding: 32 }}>
            <Header>
                <ButtonIcon
                    name="arrow-circle-left"
                    onPress={() => navigation.goBack()}
                ></ButtonIcon>
                <Title>Product {route.params?.id}</Title>
            </Header>
        </View>
    )
}