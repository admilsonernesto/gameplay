"use strict";
exports.__esModule = true;
exports.Header = void 0;
var react_1 = require("react");
var expo_linear_gradient_1 = require("expo-linear-gradient");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var native_1 = require("@react-navigation/native");
var vector_icons_1 = require("@expo/vector-icons");
var react_native_1 = require("react-native");
var theme_1 = require("../../global/styles/theme");
var styles_1 = require("./styles");
function Header(_a) {
    var title = _a.title, action = _a.action;
    var _b = theme_1.theme.colors, secondary100 = _b.secondary100, secondary40 = _b.secondary40, heading = _b.heading;
    var navigation = (0, native_1.useNavigation)();
    function handleGoBack() {
        navigation.goBack();
    }
    return (<expo_linear_gradient_1.LinearGradient style={styles_1.styles.container} colors={[secondary100, secondary40]}>
      <react_native_gesture_handler_1.BorderlessButton onPress={handleGoBack}>
        <vector_icons_1.Feather name="arrow-left" size={24} color={heading}/>
      </react_native_gesture_handler_1.BorderlessButton>

      <react_native_1.Text style={styles_1.styles.title}>
        {title}
      </react_native_1.Text>

      {action
            ?
                <react_native_1.View>
          {action}
        </react_native_1.View>
            :
                <react_native_1.View style={{ width: 24 }}/>}
    </expo_linear_gradient_1.LinearGradient>);
}
exports.Header = Header;
