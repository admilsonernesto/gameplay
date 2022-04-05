"use strict";
exports.__esModule = true;
exports.styles = void 0;
var react_native_1 = require("react-native");
var react_native_iphone_x_helper_1 = require("react-native-iphone-x-helper");
var theme_1 = require("../../global/styles/theme");
exports.styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    banner: {
        width: '100%',
        height: 234
    },
    bannerContent: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 30
    },
    title: {
        fontSize: 28,
        fontFamily: theme_1.theme.fonts.title700,
        color: theme_1.theme.colors.heading
    },
    subtitle: {
        fontSize: 13,
        fontFamily: theme_1.theme.fonts.text400,
        color: theme_1.theme.colors.heading,
        lineHeight: 21
    },
    members: {
        marginLeft: 24,
        marginTop: 27
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: (0, react_native_iphone_x_helper_1.getBottomSpace)()
    }
});
