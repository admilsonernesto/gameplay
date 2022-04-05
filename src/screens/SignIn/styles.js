"use strict";
exports.__esModule = true;
exports.styles = void 0;
var react_native_1 = require("react-native");
var theme_1 = require("../../global/styles/theme");
exports.styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 360
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    title: {
        color: theme_1.theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        fontFamily: theme_1.theme.fonts.title700,
        lineHeight: 40
    },
    subtitle: {
        color: theme_1.theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64,
        fontFamily: theme_1.theme.fonts.title500,
        lineHeight: 25
    }
});
