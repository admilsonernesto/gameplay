"use strict";
exports.__esModule = true;
exports.ListDivider = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
function ListDivider(_a) {
    var isCentered = _a.isCentered;
    return (<react_native_1.View style={[
            styles_1.styles.container,
            isCentered ? {
                marginVertical: 12
            } : {
                marginTop: 2,
                marginBottom: 31
            }
        ]}/>);
}
exports.ListDivider = ListDivider;
