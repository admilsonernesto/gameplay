"use strict";
exports.__esModule = true;
exports.styles = void 0;
var react_native_1 = require("react-native");
var react_native_iphone_x_helper_1 = require("react-native-iphone-x-helper");
var theme_1 = require("../../global/styles/theme");
exports.styles = react_native_1.StyleSheet.create({
    container: {
        width: '100%',
        height: 104,
        paddingTop: (0, react_native_iphone_x_helper_1.getStatusBarHeight)(),
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontFamily: theme_1.theme.fonts.title700,
        fontSize: 20,
        color: theme_1.theme.colors.heading
    }
});
