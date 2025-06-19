import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ButtonIcon } from "@/components/button-icon";
import { Header } from "@/components/header";
import { Title } from "@/components/title";

export function Home() {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, padding: 32 }}>
            <Header>
                <Title>Home</Title>
                <ButtonIcon
                    name="add-circle"
                    onPress={() => navigation.navigate("product")}
                ></ButtonIcon>
            </Header>
        </View>
    )
}