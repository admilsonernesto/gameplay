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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.AppointmentCreate = void 0;
var react_1 = require("react");
var vector_icons_1 = require("@expo/vector-icons");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var native_1 = require("@react-navigation/native");
var react_native_uuid_1 = require("react-native-uuid");
var react_native_1 = require("react-native");
var database_1 = require("../../configs/database");
var theme_1 = require("../../global/styles/theme");
var styles_1 = require("./styles");
var CategorySelect_1 = require("../../components/CategorySelect");
var ModalView_1 = require("../../components/ModalView");
var Background_1 = require("../../components/Background");
var SmallInput_1 = require("../../components/SmallInput");
var GuildIcon_1 = require("../../components/GuildIcon");
var TextArea_1 = require("../../components/TextArea");
var Header_1 = require("../../components/Header");
var Button_1 = require("../../components/Button");
var Guilds_1 = require("../Guilds");
function AppointmentCreate() {
    var _a = (0, react_1.useState)(''), category = _a[0], setCategory = _a[1];
    var _b = (0, react_1.useState)(false), openGuildsModa = _b[0], setOpenGuildsModal = _b[1];
    var _c = (0, react_1.useState)({}), guild = _c[0], setGuild = _c[1];
    var _d = (0, react_1.useState)(''), day = _d[0], setDay = _d[1];
    var _e = (0, react_1.useState)(''), month = _e[0], setMonth = _e[1];
    var _f = (0, react_1.useState)(''), hour = _f[0], setHour = _f[1];
    var _g = (0, react_1.useState)(''), minute = _g[0], setMinute = _g[1];
    var _h = (0, react_1.useState)(''), description = _h[0], setDescription = _h[1];
    var navigation = (0, native_1.useNavigation)();
    function handleOpenGuilds() {
        setOpenGuildsModal(true);
    }
    function handleCloseGuilds() {
        setOpenGuildsModal(false);
    }
    function handleGuildSelect(guildSelect) {
        setGuild(guildSelect);
        setOpenGuildsModal(false);
    }
    function handleCategorySelect(categoryId) {
        setCategory(categoryId);
    }
    function handleSave() {
        return __awaiter(this, void 0, void 0, function () {
            var newAppointment, storage, appointments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newAppointment = {
                            id: react_native_uuid_1["default"].v4(),
                            guild: guild,
                            category: category,
                            date: "".concat(day, "/").concat(month, " \u00E0s ").concat(hour, ":").concat(minute, "h"),
                            description: description
                        };
                        return [4 /*yield*/, async_storage_1["default"].getItem(database_1.COLLECTION_APPOINTMENTS)];
                    case 1:
                        storage = _a.sent();
                        appointments = storage ? JSON.parse(storage) : [];
                        return [4 /*yield*/, async_storage_1["default"].setItem(database_1.COLLECTION_APPOINTMENTS, JSON.stringify(__spreadArray(__spreadArray([], appointments, true), [newAppointment], false)))];
                    case 2:
                        _a.sent();
                        navigation.navigate('Home');
                        return [2 /*return*/];
                }
            });
        });
    }
    return (<react_native_1.KeyboardAvoidingView behavior={react_native_1.Platform.OS === 'ios' ? 'padding' : 'height'} style={styles_1.styles.container}>
      <Background_1.Background>
        <react_native_1.ScrollView>  
          <Header_1.Header title="Agendar partida"/>

          <react_native_1.Text style={[
            styles_1.styles.label,
            { marginLeft: 24, marginTop: 36, marginBottom: 18 }
        ]}>
            Categoria
          </react_native_1.Text>

          <CategorySelect_1.CategorySelect hasCheckBox setCategory={handleCategorySelect} categorySelected={category}/>

          <react_native_1.View style={styles_1.styles.form}>
            <react_native_gesture_handler_1.RectButton onPress={handleOpenGuilds}>
              <react_native_1.View style={styles_1.styles.select}>
                {guild.icon
            ? <GuildIcon_1.GuildIcon guildId={guild.id} iconId={guild.icon}/>
            : <react_native_1.View style={styles_1.styles.image}/>}

                <react_native_1.View style={styles_1.styles.selectBody}>
                  <react_native_1.Text style={styles_1.styles.label}>
                    {guild.name
            ? guild.name
            : 'Selecione um servidor'}
                  </react_native_1.Text>
                </react_native_1.View>

                <vector_icons_1.Feather name="chevron-right" color={theme_1.theme.colors.heading} size={18}/>
              </react_native_1.View>
            </react_native_gesture_handler_1.RectButton>
            
            <react_native_1.View style={styles_1.styles.field}>
              <react_native_1.View>
                <react_native_1.Text style={[styles_1.styles.label, { marginBottom: 12 }]}>
                  Dia e mês
                </react_native_1.Text>

                <react_native_1.View style={styles_1.styles.column}>
                  <SmallInput_1.SmallInput maxLength={2} onChangeText={setDay}/>
                  <react_native_1.Text style={styles_1.styles.divider}>
                    /
                  </react_native_1.Text>
                  <SmallInput_1.SmallInput maxLength={2} onChangeText={setMonth}/>
                </react_native_1.View>
              </react_native_1.View>

              <react_native_1.View>
                <react_native_1.Text style={[styles_1.styles.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </react_native_1.Text>

                <react_native_1.View style={styles_1.styles.column}>
                  <SmallInput_1.SmallInput maxLength={2} onChangeText={setHour}/>
                  <react_native_1.Text style={styles_1.styles.divider}>
                    :
                  </react_native_1.Text>
                  <SmallInput_1.SmallInput maxLength={2} onChangeText={setMinute}/>
                </react_native_1.View>
              </react_native_1.View>           
            </react_native_1.View>

            <react_native_1.View style={[styles_1.styles.field, { marginBottom: 12 }]}>
              <react_native_1.Text style={styles_1.styles.label}>
                Descrição
              </react_native_1.Text>

              <react_native_1.Text style={styles_1.styles.caracteresLimit}>
                Max 100 caracteres
              </react_native_1.Text>
            </react_native_1.View>

            <TextArea_1.TextArea multiline maxLength={100} numberOfLines={5} autoCorrect={false} onChangeText={setDescription}/>

            <react_native_1.View style={styles_1.styles.footer}>
              <Button_1.Button title="Agendar" onPress={handleSave}/>
            </react_native_1.View>
          </react_native_1.View>
        </react_native_1.ScrollView>
      </Background_1.Background>

      <ModalView_1.ModalView visible={openGuildsModa} closeModal={handleCloseGuilds}>
        <Guilds_1.Guilds handleGuildSelect={handleGuildSelect}/>
      </ModalView_1.ModalView>
      
    </react_native_1.KeyboardAvoidingView>);
}
exports.AppointmentCreate = AppointmentCreate;
