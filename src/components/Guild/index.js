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
exports.Guild = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var vector_icons_1 = require("@expo/vector-icons");
var styles_1 = require("./styles");
var theme_1 = require("../../global/styles/theme");
var GuildIcon_1 = require("../GuildIcon");
function Guild(_a) {
    var data = _a.data, rest = __rest(_a, ["data"]);
    return (<react_native_1.TouchableOpacity style={styles_1.styles.container} activeOpacity={0.7} {...rest}>
        <GuildIcon_1.GuildIcon guildId={data.id} iconId={data.icon}/>

        <react_native_1.View style={styles_1.styles.content}>
          <react_native_1.View>
            <react_native_1.Text style={styles_1.styles.title}>
              {data.name}
            </react_native_1.Text>

            <react_native_1.Text style={styles_1.styles.type}>
              {data.owner ? 'Administrador' : 'Convidado'}
            </react_native_1.Text>
          </react_native_1.View>
        </react_native_1.View>

        <vector_icons_1.Feather name="chevron-right" color={theme_1.theme.colors.heading} size={24}/>
    </react_native_1.TouchableOpacity>);
}
exports.Guild = Guild;
