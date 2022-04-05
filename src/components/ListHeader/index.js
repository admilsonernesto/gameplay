"use strict";
exports.__esModule = true;
exports.ListHeader = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
function ListHeader(_a) {
    var title = _a.title, subtitle = _a.subtitle;
    return (<react_native_1.View style={styles_1.styles.container}>
      <react_native_1.Text style={styles_1.styles.title}>
        {title}
      </react_native_1.Text>

      <react_native_1.Text style={styles_1.styles.subtitle}>
        {subtitle}
      </react_native_1.Text>
    </react_native_1.View>);
}
exports.ListHeader = ListHeader;
