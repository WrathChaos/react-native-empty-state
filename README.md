<img alt="React Native Empty State" src="assets/logo.png" width="1050"/>

[![Empty State library which is fully customizable and simple for any state view use-cases](https://img.shields.io/badge/-Empty%20State%20library%20which%20is%20fully%20customizable%20and%20simple%20for%20any%20state%20view%20use--cases-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-empty-state)

[![npm version](https://img.shields.io/npm/v/@freakycoder/react-native-empty-state.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-empty-state)
[![npm](https://img.shields.io/npm/dt/@freakycoder/react-native-empty-state.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-empty-state)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Empty State"
        src="assets/Screenshots/react-native-empty-state.png" />
</p>

# Installation

Add the dependency:

```bash
npm i @freakycoder/react-native-empty-state
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"@freakycoder/react-native-bounceable": ">= 0.2.2",
```

# Usage

## Import

```jsx
import EmptyState from "@freakycoder/react-native-empty-state";
```

## Fundamental Usage

```jsx
<EmptyState
  enableButton
  buttonText="Refresh"
  imageSource={emptyStateImage}
  title="Opps! Anything here :("
  description="We cannot find anything here, try again sometime"
/>
```

## Example Project 😍

You can checkout the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props

## Fundamentals

| Property    |  Type  |  Default  | Description            |
| ----------- | :----: | :-------: | ---------------------- |
| title       | string | undefined | change the title       |
| description | string | undefined | change the description |

## Customization (Optionals)

| Property                  |    Type    |  Default  | Description                                                            |
| ------------------------- | :--------: | :-------: | ---------------------------------------------------------------------- |
| enableButton              |  boolean   |   false   | let you enable the button (must use it for button)                     |
| onPress                   |  function  | undefined | set your own logic for the button functionality when it is pressed     |
| buttonText                |   string   | undefined | change the button's text                                               |
| style                     | ViewStyle  |  default  | set or override the style object for the main container                |
| buttonStyle               | ViewStyle  |  default  | set or override the style object for the button style                  |
| titleTextStyle            | TextStyle  |  default  | set or override the style object for the title text style              |
| buttonTextStyle           | TextStyle  |  default  | set or override the style object for the button's text style           |
| descriptionTextStyle      | TextStyle  |  default  | set or override the style object for the description text style        |
| containerGlueStyle        | ViewStyle  |  default  | set or override the style object for the container glue style          |
| descriptionContainerStyle | ViewStyle  |  default  | set or override the style object for the description container style   |
| imageStyle                | ImageStyle |  default  | set or override the style object for the image style                   |
| ImageComponent            |   Image    |  default  | set your own component instead of default react-native Image component |

## Future Plans

- [x] ~~LICENSE~~

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Empty State is available under the MIT license. See the LICENSE file for more info.
