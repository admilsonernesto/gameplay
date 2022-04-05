"use strict";
exports.__esModule = true;
exports.styles = void 0;
var react_native_1 = require("react-native");
var theme_1 = require("../../global/styles/theme");
exports.styles = react_native_1.StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        marginTop: 27
    },
    title: {
        fontFamily: theme_1.theme.fonts.title700,
        color: theme_1.theme.colors.heading,
        fontSize: 18
    },
    subtitle: {
        fontFamily: theme_1.theme.fonts.text400,
        color: theme_1.theme.colors.highlight,
        fontSize: 13
    }
});
