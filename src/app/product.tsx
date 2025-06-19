import { ButtonIcon } from "@/components/button-icon";
import { Header } from "@/components/header";
import { Title } from "@/components/title";
import { View } from "react-native";

export function Product() {
    return (
        <View style={{ flex: 1, padding: 32 }}>
            <Header>
                <ButtonIcon name="arrow-circle-left"></ButtonIcon>
                <Title>Product</Title>
            </Header>
        </View>
    )
}