import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../Pages/home";
import TodoForm from "../Components/todo";

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;
export default function AppNavigation() {
  return (
    <Navigator>
      <Screen name="home" component={HomePage} />
      <Screen name="todo" component={TodoForm} />
    </Navigator>
  );
}
