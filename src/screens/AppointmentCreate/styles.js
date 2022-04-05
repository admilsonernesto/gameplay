"use strict";
exports.__esModule = true;
exports.styles = void 0;
var react_native_1 = require("react-native");
var theme_1 = require("../../global/styles/theme");
exports.styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    label: {
        fontSize: 18,
        fontFamily: theme_1.theme.fonts.title700,
        color: theme_1.theme.colors.heading
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32
    },
    select: {
        flexDirection: 'row',
        width: '100%',
        height: 68,
        borderColor: theme_1.theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 25,
        overflow: 'hidden'
    },
    selectBody: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: 64,
        height: 68,
        backgroundColor: theme_1.theme.colors.secondary40,
        borderColor: theme_1.theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8
    },
    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    divider: {
        marginRight: 4,
        fontSize: 15,
        fontFamily: theme_1.theme.fonts.text500,
        color: theme_1.theme.colors.highlight
    },
    caracteresLimit: {
        fontFamily: theme_1.theme.fonts.text400,
        fontSize: 13,
        color: theme_1.theme.colors.highlight
    },
    footer: {
        marginVertical: 20,
        marginBottom: 56
    }
});