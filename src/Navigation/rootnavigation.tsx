import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./appnavigation";

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}
