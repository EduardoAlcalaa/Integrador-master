import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
 
import Notes from "../screens/Notes"
import LoginScreen from "../screens/LoginScreen";
import MyComponent from "../screens/MyComponent";
import ResumoScreen from "../screens/ResumoScreen";
import HelloWorldApp from "../screens/teste";
 
 
 
const Stack = createNativeStackNavigator();
 
export default function AppNavigator() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator>
 
      <Stack.Screen
name="Teste"
component={HelloWorldApp}
options={{
  title: "Inserir Resumo",
  headerShown: false,
}}
/>
      <Stack.Screen
name="Resumos"
component={ResumoScreen}
options={{
  title: "Inserir Resumo",
  headerShown: false,
}}
/>

<Stack.Screen
name="Notes"
component={Notes}
options={{
  title: "Inserir Nota",
  headerShown: false,
}}
/>
<Stack.Screen
        name="My"
        component={MyComponent}
        options={{
          title: "MyComponents",
          headerShown: false,
        }}
        />
<Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Inserir Login",
            headerShown: false,
          }}
        />


    

      </Stack.Navigator>
    </NavigationContainer>
  );
}
 