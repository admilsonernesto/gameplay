"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.useAuth = exports.AuthProvider = exports.AuthContext = void 0;
var react_1 = require("react");
var AuthSession = require("expo-auth-session");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var SCOPE = process.env.SCOPE;
var CLIENT_ID = process.env.CLIENT_ID;
var CDN_IMAGE = process.env.CDN_IMAGE;
var REDIRECT_URI = process.env.REDIRECT_URI;
var RESPONSE_TYPE = process.env.RESPONSE_TYPE;
var api_1 = require("../services/api");
var database_1 = require("../configs/database");
exports.AuthContext = (0, react_1.createContext)({});
function AuthProvider(_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)({}), user = _b[0], setUser = _b[1];
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    function signIn() {
        return __awaiter(this, void 0, void 0, function () {
            var authUrl, _a, type, params, userInfo, firstName, userData, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, 6, 7]);
                        console.log('signIn');
                        setLoading(true);
                        authUrl = "".concat(api_1.api.defaults.baseURL, "/oauth2/authorize?client_id=").concat(CLIENT_ID, "&redirect_uri=").concat(REDIRECT_URI, "&response_type=").concat(RESPONSE_TYPE, "&scope=").concat(SCOPE);
                        return [4 /*yield*/, AuthSession
                                .startAsync({ authUrl: authUrl })];
                    case 1:
                        _a = _c.sent(), type = _a.type, params = _a.params;
                        if (!(type === "success" && !params.error)) return [3 /*break*/, 4];
                        console.log('deu bom');
                        api_1.api.defaults.headers.common['Authorization'] = "Bearer ".concat(params.access_token);
                        return [4 /*yield*/, api_1.api.get('/users/@me')];
                    case 2:
                        userInfo = _c.sent();
                        firstName = userInfo.data.username.split(' ')[0];
                        userInfo.data.avatar = "".concat(CDN_IMAGE, "/avatars/").concat(userInfo.data.id, "/").concat(userInfo.data.avatar, ".png");
                        console.log(firstName);
                        console.log(params.access_token);
                        userData = __assign(__assign({}, userInfo.data), { firstName: firstName, token: params.access_token });
                        return [4 /*yield*/, async_storage_1["default"].setItem(database_1.COLLECTION_USERS, JSON.stringify(userData))];
                    case 3:
                        _c.sent();
                        setUser(userData);
                        _c.label = 4;
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        _b = _c.sent();
                        throw new Error('Não foi possível autenticar!');
                    case 6:
                        setLoading(false);
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
    function singOut() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setUser({});
                        return [4 /*yield*/, async_storage_1["default"].removeItem(database_1.COLLECTION_USERS)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function loadUserStorageData() {
        return __awaiter(this, void 0, void 0, function () {
            var storage, userLogged;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_storage_1["default"].getItem(database_1.COLLECTION_USERS)];
                    case 1:
                        storage = _a.sent();
                        if (storage) {
                            userLogged = JSON.parse(storage);
                            api_1.api.defaults.headers.common['Authorization'] = "Bearer ".concat(userLogged.token);
                            setUser(userLogged);
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    (0, react_1.useEffect)(function () {
        loadUserStorageData();
    }, []);
    return (<exports.AuthContext.Provider value={{
            user: user,
            loading: loading,
            signIn: signIn,
            singOut: singOut
        }}>
      {children}
    </exports.AuthContext.Provider>);
}
exports.AuthProvider = AuthProvider;
function useAuth() {
    var context = (0, react_1.useContext)(exports.AuthContext);
    return context;
}
exports.useAuth = useAuth;
