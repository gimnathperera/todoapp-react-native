import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Screens } from "../constants/config";
import { HomeScreen } from "../screens";
import NewTaskScreen from "../screens/NewTaskScreen";

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name={Screens.HomeScreen} component={HomeScreen} />
        <Stack.Screen
          name={Screens.NewTaskScreen}
          component={NewTaskScreen}
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            headerTitle: () => <></>,
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
