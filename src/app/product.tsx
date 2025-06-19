import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ButtonIcon } from "@/components/button-icon";
import { Header } from "@/components/header";
import { Title } from "@/components/title";

export function Product() {
    const navigation = useNavigation()

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