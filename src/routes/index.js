"use strict";
exports.__esModule = true;
exports.Routes = void 0;
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var auth_1 = require("../hooks/auth");
var SignIn_1 = require("../screens/SignIn");
var app_routes_1 = require("./app.routes");
function Routes() {
    var user = (0, auth_1.useAuth)().user;
    return (<native_1.NavigationContainer>
      {user.id ? <app_routes_1.AppRoutes /> : <SignIn_1.SignIn />}
    </native_1.NavigationContainer>);
}
exports.Routes = Routes;
