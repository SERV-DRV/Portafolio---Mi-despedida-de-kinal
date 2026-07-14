import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../features/home/screens/HomeScreen";
import AboutScreen from "../features/about/screens/AboutScreen";
import SkillsScreen from "../features/skills/screens/SkillsScreen";
import ContactScreen from "../features/contact/screens/ContactScreen";
import ProjectDetailScreen from "../features/projects/screens/ProjectDetailScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    animation: "slide_from_right",
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="About" component={AboutScreen} />
                <Stack.Screen name="Skills" component={SkillsScreen} />
                <Stack.Screen name="Contact" component={ContactScreen} />
                <Stack.Screen name="ProjectDetail" component={ProjectDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
