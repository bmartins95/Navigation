import { ButtonIcon } from "@/components/button-icon";
import { Header } from "@/components/header";
import { Title } from "@/components/title";
import { View } from "react-native";

export function Home() {
    return (
        <View style={{ flex: 1, padding: 32 }}>
            <Header>
                <Title>Home</Title>
                <ButtonIcon name="add-circle"></ButtonIcon>
            </Header>
        </View>
    )
}