import { View } from "react-native";

import { StackRouteProps } from "@/routes/stack-routes";
import { BottonTabRouteProps } from "@/routes/bottom-routes";
import { DrawerRouteProps } from "@/routes/drawer-routes";

import { ButtonIcon } from "@/components/button-icon";
import { Header } from "@/components/header";
import { Title } from "@/components/title";

export function Home({ navigation }: DrawerRouteProps<"home">) {

    return (
        <View style={{ flex: 1, padding: 32 }}>
            <Header>
                <Title>Home</Title>
                <ButtonIcon
                    name="add-circle"
                    onPress={() => navigation.navigate("product", { id: "7" })}
                ></ButtonIcon>
            </Header>
        </View>
    )
}