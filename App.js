"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var inter_1 = require("@expo-google-fonts/inter");
var rajdhani_1 = require("@expo-google-fonts/rajdhani");
var expo_app_loading_1 = require("expo-app-loading");
var expo_font_1 = require("expo-font");
react_native_1.LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.']);
var auth_1 = require("./src/hooks/auth");
var routes_1 = require("./src/routes");
var Background_1 = require("./src/components/Background");
function App() {
    var fontsLoaded = (0, expo_font_1.useFonts)({
        Inter_400Regular: inter_1.Inter_400Regular,
        Inter_500Medium: inter_1.Inter_500Medium,
        Rajdhani_500Medium: rajdhani_1.Rajdhani_500Medium,
        Rajdhani_700Bold: rajdhani_1.Rajdhani_700Bold
    })[0];
    if (!fontsLoaded) {
        return <expo_app_loading_1["default"] />;
    }
    return (<Background_1.Background>
      <react_native_1.StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <auth_1.AuthProvider>
        <routes_1.Routes />
      </auth_1.AuthProvider>
    </Background_1.Background>);
}
exports["default"] = App;
