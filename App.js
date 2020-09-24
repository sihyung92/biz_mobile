import { Provider } from 'react-redux';
import React from 'react';
import store from './src/store';
import AppView from './src/AppView';
import { AppLoading } from "expo";
import * as Font from 'expo-font';
import { useFonts } from "@use-expo/font";

const RootApp = () => (
    <Provider store={store}>
      <AppView/>
    </Provider>
  );

const customFonts = {
  NotoSansKR: {
    uri: require("./assets/fonts/NotoSansKR-Regular.otf"),
    fontDisplay: "swap"
    },
};

export default () => {
    const [isLoaded] = useFonts(customFonts);

    if (!isLoaded) {
        return <AppLoading />;
    }

    return <RootApp />;
}

