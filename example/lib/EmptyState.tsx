import React from "react";
import { Text, Image, View, Dimensions } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles from "./EmptyState.style";

const { width: ScreenWidth } = Dimensions.get("window");

interface IEmptyStateProps {
  ImageComponent?: any;
  title: string;
  description: string;
  buttonText?: string;
  onPress?: () => void;
}

const EmptyState = (props: IEmptyStateProps) => {
  const {
    title,
    description,
    buttonText,
    onPress,
    ImageComponent = Image,
  } = props;
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <ImageComponent
        resizeMode="contain"
        source={require("./local-assets/empty-icon.png")}
        style={{ height: 300, width: 300 }}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 16,
        }}
      >
        <Text style={{ fontSize: 24 }}>{title}</Text>
        <View
          style={{
            marginTop: 24,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <Text style={{ color: "#757575", fontSize: 14, textAlign: "center" }}>
            {description}
          </Text>
        </View>
      </View>
      <RNBounceable
        bounceEffect={0.97}
        {...props}
        style={{
          height: 45,
          width: ScreenWidth * 0.5,
          marginTop: 72,
          borderRadius: 24,
          backgroundColor: "#1ca9df",
          alignItems: "center",
          justifyContent: "center",
          shadowRadius: 8,
          shadowOpacity: 0.3,
          shadowColor: "#1ca9df",
          shadowOffset: {
            width: 0,
            height: 3,
          },
        }}
        onPress={onPress}
      >
        <Text style={{ color: "#fdfdfd", fontSize: 16 }}>{buttonText}</Text>
      </RNBounceable>
    </View>
  );
};

export default EmptyState;
