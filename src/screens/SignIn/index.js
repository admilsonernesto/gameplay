"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.SignIn = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var auth_1 = require("../../hooks/auth");
var illustration_png_1 = require("../../assets/illustration.png");
var theme_1 = require("../../global/styles/theme");
var styles_1 = require("./styles");
var ButtonIcon_1 = require("../../components/ButtonIcon");
var Background_1 = require("../../components/Background");
function SignIn() {
    var _a = (0, auth_1.useAuth)(), loading = _a.loading, signIn = _a.signIn;
    function handleSignIn() {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        react_native_1.Alert.alert('handleSignInn!');
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, signIn()];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        react_native_1.Alert.alert('Erro no login!');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function agoravai() {
        react_native_1.Alert.alert('agora foi!');
    }
    return (<Background_1.Background>
      <react_native_1.View style={styles_1.styles.container}>     
        <react_native_1.Image source={illustration_png_1["default"]} style={styles_1.styles.image} resizeMode="stretch"/>

        <react_native_1.View style={styles_1.styles.content}>
          <react_native_1.Text style={styles_1.styles.title}>
            Conecte-se {'\n'}
            e organize suas {'\n'} 
            jogatinas
          </react_native_1.Text>

          <react_native_1.Text style={styles_1.styles.subtitle}>
            Crie grupos para jogar seus games {'\n'} 
            favoritos com seus amigos
          </react_native_1.Text>

          <react_native_1.Button title='ava' onPress={agoravai}/>  


          {loading ? <react_native_1.ActivityIndicator color={theme_1.theme.colors.primary}/> :
            <ButtonIcon_1.ButtonIcon title="Entrar com Discord" onPress={handleSignIn}/>}                             
        </react_native_1.View>
      </react_native_1.View>
    </Background_1.Background>);
}
exports.SignIn = SignIn;
