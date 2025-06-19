import { View } from "react-native";

import { StackRouteProps } from "@/routes/stack-routes";

import { ButtonIcon } from "@/components/button-icon";
import { Header } from "@/components/header";
import { Title } from "@/components/title";

export function Product({ navigation }: StackRouteProps<"product">) {

    return (
        <View style={{ flex: 1, padding: 32 }}>
            <Header>
                <ButtonIcon
                    name="arrow-circle-left"
                    onPress={() => navigation.goBack()}
                ></ButtonIcon>
                <Title>Product</Title>
            </Header>
        </View>
    )
}