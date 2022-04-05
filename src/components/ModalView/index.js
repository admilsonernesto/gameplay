"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.ModalView = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var Background_1 = require("../Background");
function ModalView(_a) {
    var children = _a.children, closeModal = _a.closeModal, rest = __rest(_a, ["children", "closeModal"]);
    return (<react_native_1.Modal transparent animationType="slide" statusBarTranslucent {...rest}>
      <react_native_1.TouchableWithoutFeedback onPress={closeModal}>
        <react_native_1.View style={styles_1.styles.overlay}>
          <react_native_1.View style={styles_1.styles.container}>
            <Background_1.Background>
              <react_native_1.View style={styles_1.styles.bar}/>
              {children}
            </Background_1.Background>
          </react_native_1.View>
        </react_native_1.View>
      </react_native_1.TouchableWithoutFeedback>
    </react_native_1.Modal>);
}
exports.ModalView = ModalView;
