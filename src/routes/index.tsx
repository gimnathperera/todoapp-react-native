import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { AppStack } from "./AppStack";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
        }}
      >
        <RootStack.Screen
          name="App"
          component={AppStack}
          options={{
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
