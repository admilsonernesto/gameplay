"use strict";
exports.__esModule = true;
exports.CategorySelect = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var categories_1 = require("../../utils/categories");
var Category_1 = require("../Category");
function CategorySelect(_a) {
    var categorySelected = _a.categorySelected, setCategory = _a.setCategory, _b = _a.hasCheckBox, hasCheckBox = _b === void 0 ? false : _b;
    return (<react_native_1.ScrollView horizontal style={styles_1.styles.container} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 40 }}>
      {categories_1.categories.map(function (category) { return (<Category_1.Category key={category.id} title={category.title} icon={category.icon} checked={category.id === categorySelected} onPress={function () { return setCategory(category.id); }} hasCheckBox={hasCheckBox}/>); })}
    </react_native_1.ScrollView>);
}
exports.CategorySelect = CategorySelect;
