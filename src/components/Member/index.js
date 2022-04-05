"use strict";
exports.__esModule = true;
exports.Member = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var Avatar_1 = require("../Avatar");
var theme_1 = require("../../global/styles/theme");
function Member(_a) {
    var data = _a.data;
    var _b = theme_1.theme.colors, on = _b.on, primary = _b.primary;
    var isOnline = data.status === 'online';
    return (<react_native_1.View style={styles_1.styles.container}>
      <Avatar_1.Avatar urlImage={data.avatar_url}/>

      <react_native_1.View>
        <react_native_1.Text style={styles_1.styles.title}>
          {data.username}
        </react_native_1.Text>

        <react_native_1.View style={styles_1.styles.status}>
          <react_native_1.View style={[
            styles_1.styles.bulletStatus,
            {
                backgroundColor: isOnline ? on : primary
            }
        ]}/>

          <react_native_1.Text style={styles_1.styles.nameStatus}>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </react_native_1.Text>
        </react_native_1.View>
      </react_native_1.View>
    </react_native_1.View>);
}
exports.Member = Member;
