import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./stack-routes";
import { BottonRoutes } from "./bottom-routes";

export function Routes() {
    return (
        <NavigationContainer>
            <BottonRoutes></BottonRoutes>
        </NavigationContainer>
    )
}