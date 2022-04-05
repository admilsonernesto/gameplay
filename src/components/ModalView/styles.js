"use strict";
exports.__esModule = true;
exports.styles = void 0;
var react_native_1 = require("react-native");
var theme_1 = require("../../global/styles/theme");
exports.styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100
    },
    overlay: {
        flex: 1,
        backgroundColor: theme_1.theme.colors.overlay
    },
    bar: {
        width: 39,
        height: 2,
        borderRadius: 2,
        backgroundColor: theme_1.theme.colors.secondary30,
        alignSelf: 'center',
        marginTop: 13
    }
});
