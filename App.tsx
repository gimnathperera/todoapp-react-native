import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";
import Routes from "./src/routes";
import { WithStore } from "./src/hocs/WithStore";

const App = () => {
  return (
    <WithStore>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <Routes />
      </SafeAreaView>
    </WithStore>
  );
};

export default App;
