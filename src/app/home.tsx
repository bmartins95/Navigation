import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { StackRoutesList } from "@/routes/stack-routes";

import { ButtonIcon } from "@/components/button-icon";
import { Header } from "@/components/header";
import { Title } from "@/components/title";

type Props = NativeStackScreenProps<StackRoutesList, "home">

export function Home({ navigation }: Props) {

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