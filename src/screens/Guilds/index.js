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
exports.Guilds = void 0;
var react_1 = require("react");
var react_2 = require("react");
var react_native_1 = require("react-native");
var Guild_1 = require("../../components/Guild");
var Load_1 = require("../../components/Load");
var ListDivider_1 = require("../../components/ListDivider");
var styles_1 = require("./styles");
var api_1 = require("../../services/api");
function Guilds(_a) {
    var handleGuildSelect = _a.handleGuildSelect;
    var _b = (0, react_2.useState)([]), guilds = _b[0], setGuilds = _b[1];
    var _c = (0, react_2.useState)(true), loading = _c[0], setLoading = _c[1];
    function fetchGuilds() {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.api.get('/users/@me/guilds')];
                    case 1:
                        response = _a.sent();
                        setGuilds(response.data);
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        });
    }
    (0, react_1.useEffect)(function () {
        fetchGuilds();
    }, []);
    return (<react_native_1.View style={styles_1.styles.container}>
      {loading ? <Load_1.Load /> :
            <react_native_1.FlatList data={guilds} keyExtractor={function (item) { return item.id; }} renderItem={function (_a) {
                    var item = _a.item;
                    return (<Guild_1.Guild data={item} onPress={function () { return handleGuildSelect(item); }}/>);
                }} showsVerticalScrollIndicator={false} ItemSeparatorComponent={function () { return <ListDivider_1.ListDivider isCentered/>; }} ListHeaderComponent={function () { return <ListDivider_1.ListDivider isCentered/>; }} contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }} style={styles_1.styles.guilds}/>}
    </react_native_1.View>);
}
exports.Guilds = Guilds;