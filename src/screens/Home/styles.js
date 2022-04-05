"use strict";
exports.__esModule = true;
exports.styles = void 0;
var react_native_1 = require("react-native");
var react_native_iphone_x_helper_1 = require("react-native-iphone-x-helper");
exports.styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: (0, react_native_iphone_x_helper_1.getStatusBarHeight)() + 26,
        marginBottom: 42
    },
    matches: {
        marginTop: 24,
        marginLeft: 24
    }
});
