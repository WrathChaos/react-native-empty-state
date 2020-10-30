import * as React from "react";
import {
  Text,
  Image,
  View,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
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
  imageStyle?: ImageStyle;
  titleTextStyle?: TextStyle;
  buttonTextStyle?: TextStyle;
  containerGlueStyle?: ViewStyle;
  descriptionTextStyle?: TextStyle;
  descriptionContainerStyle?: ViewStyle;
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
    imageStyle,
    buttonStyle,
    titleTextStyle,
    buttonTextStyle,
    containerGlueStyle,
    descriptionTextStyle,
    descriptionContainerStyle,
    ImageComponent = Image,
    imageSource,
    onPress,
  } = props;
  return (
    <View style={[styles.container, style]}>
      <ImageComponent
        resizeMode="contain"
        source={imageSource}
        style={[styles.imageStyle, imageStyle]}
      />
      <View style={[styles.containerGlue, containerGlueStyle]}>
        <Text style={[styles.titleTextStyle, titleTextStyle]}>{title}</Text>
        <View style={[styles.descriptionContainer, descriptionContainerStyle]}>
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
