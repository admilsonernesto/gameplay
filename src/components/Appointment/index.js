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
exports.Appointment = void 0;
var react_1 = require("react");
var expo_linear_gradient_1 = require("expo-linear-gradient");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_native_1 = require("react-native");
var theme_1 = require("../../global/styles/theme");
var styles_1 = require("./styles");
var player_svg_1 = require("../../assets/player.svg");
var calendar_svg_1 = require("../../assets/calendar.svg");
var GuildIcon_1 = require("../GuildIcon");
var categories_1 = require("../../utils/categories");
function Appointment(_a) {
    var data = _a.data, rest = __rest(_a, ["data"]);
    var category = categories_1.categories.filter(function (item) { return item.id === data.category; })[0];
    var owner = data.guild.owner;
    var _b = theme_1.theme.colors, primary = _b.primary, on = _b.on, secondary50 = _b.secondary50, secondary70 = _b.secondary70;
    return (<react_native_gesture_handler_1.RectButton {...rest}>
      <react_native_1.View style={styles_1.styles.container}>
        <expo_linear_gradient_1.LinearGradient style={styles_1.styles.guildIconContainer} colors={[secondary50, secondary70]}>
          <GuildIcon_1.GuildIcon guildId={data.guild.id} iconId={data.guild.icon}/>
        </expo_linear_gradient_1.LinearGradient>

        <react_native_1.View style={styles_1.styles.content}>
          <react_native_1.View style={styles_1.styles.header}>
            <react_native_1.Text style={styles_1.styles.title}>
              {data.guild.name}
            </react_native_1.Text>

            <react_native_1.Text style={styles_1.styles.category}>
              {category ? category.title : 'Sem Categoria'}
            </react_native_1.Text>
          </react_native_1.View>

          <react_native_1.View style={styles_1.styles.footer}>
            <react_native_1.View style={styles_1.styles.dateInfo}>
              <calendar_svg_1["default"] />

              <react_native_1.Text style={styles_1.styles.date}>
                {data.date}
              </react_native_1.Text>
            </react_native_1.View>

            <react_native_1.View style={styles_1.styles.playersInfo}>
              <player_svg_1["default"] fill={owner ? primary : on}/>

              <react_native_1.Text style={[
            styles_1.styles.player,
            { color: owner ? primary : on }
        ]}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </react_native_1.Text>
            </react_native_1.View>
          </react_native_1.View>
        </react_native_1.View>
      </react_native_1.View>
    </react_native_gesture_handler_1.RectButton>);
}
exports.Appointment = Appointment;
