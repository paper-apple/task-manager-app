import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateTaskScreen from "../screens/CreateTaskScreen";
import TasksScreen from "../screens/TasksScreen";
import { RootStackParamList } from "../types/navigation";
import TaskDetailsScreen from "../screens/TaskDetailsScreen";

const Stack =
  createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,

          headerStyle: {
            backgroundColor: "#f2f4f7",
          },

          headerTitleStyle: {
            fontWeight: "700",
          },
        }}
      >
        <Stack.Screen
          name="Tasks"
          component={TasksScreen}
        />
        <Stack.Screen
          name="CreateTask"
          component={CreateTaskScreen}
          options={{
            title: "Create Task",
          }}
        />
        <Stack.Screen
          name="TaskDetails"
          component={TaskDetailsScreen}
          options={{
            title: "Task Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}