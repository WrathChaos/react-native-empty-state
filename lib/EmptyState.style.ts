import {
  Dimensions,
  ViewStyle,
  ImageStyle,
  TextStyle,
  StyleSheet,
} from "react-native";
const { width: ScreenWidth } = Dimensions.get("window");

interface Style {
  container: ViewStyle;
  imageStyle: ImageStyle;
  buttonTextStyle: TextStyle;
  containerGlue: ViewStyle;
  titleTextStyle: TextStyle;
  descriptionTextStyle: TextStyle;
  descriptionContainer: ViewStyle;
  buttonStyle: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: 300,
    height: 300,
  },
  buttonTextStyle: {
    fontSize: 16,
    color: "#fdfdfd",
  },
  containerGlue: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  titleTextStyle: {
    fontSize: 24,
  },
  descriptionContainer: {
    marginTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
  },
  descriptionTextStyle: {
    fontSize: 14,
    color: "#757575",
    textAlign: "center",
  },
  buttonStyle: {
    height: 45,
    marginTop: 72,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    width: ScreenWidth * 0.5,
    backgroundColor: "#1ca9df",
    shadowRadius: 8,
    shadowOpacity: 0.3,
    shadowColor: "#1ca9df",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
