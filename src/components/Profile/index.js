"use strict";
exports.__esModule = true;
exports.Profile = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var auth_1 = require("../../hooks/auth");
var Avatar_1 = require("../Avatar");
var styles_1 = require("./styles");
function Profile() {
    var _a = (0, auth_1.useAuth)(), user = _a.user, singOut = _a.singOut;
    function handleSignOut() {
        react_native_1.Alert.alert('Logout', 'Deseja sair do GamePlay?', [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: function () { return singOut(); }
            }
        ]);
    }
    return (<react_native_1.View style={styles_1.styles.container}>

      <react_native_gesture_handler_1.RectButton onPress={handleSignOut}>
        <Avatar_1.Avatar urlImage={user.avatar}/>
      </react_native_gesture_handler_1.RectButton>

      <react_native_1.View>
        <react_native_1.View style={styles_1.styles.user}>
          <react_native_1.Text style={styles_1.styles.greeting}>
            Olá,
          </react_native_1.Text>

          <react_native_1.Text style={styles_1.styles.username}>
            {user.firstName}
          </react_native_1.Text>
        </react_native_1.View>

        <react_native_1.Text style={styles_1.styles.message}>
          Hoje é dia de vitória
        </react_native_1.Text>
      </react_native_1.View>

    </react_native_1.View>);
}
exports.Profile = Profile;
