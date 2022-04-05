"use strict";
exports.__esModule = true;
exports.AppRoutes = void 0;
var react_1 = require("react");
var stack_1 = require("@react-navigation/stack");
var theme_1 = require("../global/styles/theme");
var Home_1 = require("../screens/Home");
var AppointmentDetails_1 = require("../screens/AppointmentDetails");
var AppointmentCreate_1 = require("../screens/AppointmentCreate");
var _a = (0, stack_1.createStackNavigator)(), Navigator = _a.Navigator, Screen = _a.Screen;
function AppRoutes() {
    return (<Navigator screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: theme_1.theme.colors.secondary100
            }
        }}>     
      <Screen name="Home" component={Home_1.Home}/>
      <Screen name="AppointmentDetails" component={AppointmentDetails_1.AppointmentDetails}/>
      <Screen name="AppointmentCreate" component={AppointmentCreate_1.AppointmentCreate}/>      
    </Navigator>);
}
exports.AppRoutes = AppRoutes;
