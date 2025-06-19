import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { StackRoutesList } from "@/routes/stack-routes";

import { ButtonIcon } from "@/components/button-icon";
import { Header } from "@/components/header";
import { Title } from "@/components/title";

type Props = NativeStackScreenProps<StackRoutesList, "product">

export function Product({ navigation }: Props) {

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