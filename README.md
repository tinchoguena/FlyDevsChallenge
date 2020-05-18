# FlyDevsChallenge

This is an application for search and view your favourite pokemons.

## Prerequisites

- Node and npm
- Watchman brew install watchman
- React Native CLI npm install -g react-native-cli
- XCode > 9
- JDK > 8
- Android Studio and Android SDK

## Base dependencies

- [React-Navigation](https://reactnavigation.org/) navigation library.
- [Redux](https://redux.js.org/) for state management.
- [Redux-Thunk](https://github.com/reduxjs/redux-thunk) to dispatch asynchronous actions.
- [Redux devtools](https://extension.remotedev.io/) extension for debbuging.
- [Styled](https://styled-components.com/) components for styling.
- [React Native Vector Icons](https://oblador.github.io/react-native-vector-icons/)
- [Jest](https://jestjs.io/) for testing.

## Installation

- Clone the repository into your computer.

- Then:

```bash
cd FlyDevsChallenge

npm install

cd ios

pod install

cd ..
```

iOS

- Open xCode, open project, go to FlyDevsChallenge/ios and select .workspace file. Wait for it to build, hit play (will open the simulator).

Android

- Open Android studio, open project, select FlyDevsChallenge/android wait for the gradle to finish build and hit play (will open the simulator).

## Usage

Click the let's go button, a full list of pokemons will load, start typing on the input and your list will start to filter.


![Start Screen](/asstets/startScreen.png)


![Pokemons Screen](/asstets/PokemonsScreen.png)



## Testing

Simple API check testing calling a test funcion on src/store/services.

```bash
cd FlyDevsChallenge

npm run test
```

The test will pass if the response matches.

## Author

[Martin Guena](https://www.linkedin.com/in/martinguena/)
