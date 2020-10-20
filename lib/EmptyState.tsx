import * as React from "react";
import { Text, Image, View, ViewStyle, TextStyle } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles from "./EmptyState.style";

export interface ISource {
  source: string | { uri: string };
}

export interface IEmptyStateProps {
  title: string;
  enableButton?: boolean;
  description: string;
  buttonText?: string;
  ImageComponent?: any;
  style?: ViewStyle;
  buttonStyle?: ViewStyle;
  titleTextStyle?: TextStyle;
  buttonTextStyle?: TextStyle;
  descriptionTextStyle?: TextStyle;
  imageSource: ISource;
  onPress?: () => void;
}

const EmptyState = (props: IEmptyStateProps) => {
  const {
    title,
    buttonText,
    description,
    enableButton = false,
    style,
    buttonStyle,
    titleTextStyle,
    buttonTextStyle,
    descriptionTextStyle,
    ImageComponent = Image,
    imageSource,
    onPress,
  } = props;
  return (
    <View style={[styles.container, style]}>
      <ImageComponent
        resizeMode="contain"
        source={imageSource}
        style={styles.imageStyle}
      />
      <View style={styles.containerGlue}>
        <Text style={[styles.titleTextStyle, titleTextStyle]}>{title}</Text>
        <View style={styles.descriptionContainer}>
          <Text style={[styles.descriptionTextStyle, descriptionTextStyle]}>
            {description}
          </Text>
        </View>
      </View>
      {enableButton && (
        <RNBounceable
          bounceEffect={0.97}
          {...props}
          style={[styles.buttonStyle, buttonStyle]}
          onPress={onPress}
        >
          <Text style={[styles.buttonTextStyle, buttonTextStyle]}>
            {buttonText}
          </Text>
        </RNBounceable>
      )}
    </View>
  );
};

export default EmptyState;
