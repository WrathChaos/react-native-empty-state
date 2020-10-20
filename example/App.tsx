import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import GorgeousHeader from "react-native-gorgeous-header";
import EmptyState from "@freakycoder/react-native-empty-state";

const emptyStateImage = require("./assets/empty-icon.png");
const menuImage = require("./assets/menu.png");
const searchImage = require("./assets/search.png");

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <GorgeousHeader
          menuImageSource={menuImage}
          searchImageSource={searchImage}
          placeholder="Search any healhty food..."
          profileImageSource={{
            uri:
              "https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          }}
        />
        <EmptyState
          enableButton
          buttonText="Refresh"
          imageSource={emptyStateImage}
          title="Opps! Anything here :("
          description="We cannot find anything here, try again sometime"
        />
      </SafeAreaView>
    </>
  );
};

export default App;
