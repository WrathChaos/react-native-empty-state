import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import EmptyState from "./lib/EmptyState";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <EmptyState
          title="Opps! Anything here :("
          description="We cannot find anything here, try again sometime"
          buttonText="Refresh"
        />
      </SafeAreaView>
    </>
  );
};

export default App;
