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
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { GuildIcon } from '../GuildIcon';
export function Guild(_a) {
    var { data } = _a, rest = __rest(_a, ["data"]);
    return (<TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
        <GuildIcon guildId={data.id} iconId={data.icon}/>

        <View style={styles.content}>
          <View>
            <Text style={styles.title}>
              {data.name}
            </Text>

            <Text style={styles.type}>
              {data.owner ? 'Administrador' : 'Convidado'}
            </Text>
          </View>
        </View>

        <Feather name="chevron-right" color={theme.colors.heading} size={24}/>
    </TouchableOpacity>);
}
