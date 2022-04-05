"use strict";
exports.__esModule = true;
exports.GuildIcon = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var discord_svg_1 = require("../../assets/discord.svg");
var CDN_IMAGE = process.env.CDN_IMAGE;
function GuildIcon(_a) {
    var guildId = _a.guildId, iconId = _a.iconId;
    var uri = "".concat(CDN_IMAGE, "/icons/").concat(guildId, "/").concat(iconId, ".png");
    return (<react_native_1.View style={styles_1.styles.container}>
      {iconId ?
            <react_native_1.Image source={{ uri: uri }} style={styles_1.styles.image} resizeMode="cover"/>
            :
                <discord_svg_1["default"] width={40} height={40}/>}
    </react_native_1.View>);
}
exports.GuildIcon = GuildIcon;
