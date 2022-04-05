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
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { GuildIcon } from '../GuildIcon';
import { categories } from '../../utils/categories';
export function Appointment(_a) {
    var { data } = _a, rest = __rest(_a, ["data"]);
    const [category] = categories.filter(item => item.id === data.category);
    const { owner } = data.guild;
    const { primary, on, secondary50, secondary70 } = theme.colors;
    return (<RectButton {...rest}>
      <View style={styles.container}>
        <LinearGradient style={styles.guildIconContainer} colors={[secondary50, secondary70]}>
          <GuildIcon guildId={data.guild.id} iconId={data.guild.icon}/>
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {data.guild.name}
            </Text>

            <Text style={styles.category}>
              {category ? category.title : 'Sem Categoria'}
            </Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />

              <Text style={styles.date}>
                {data.date}
              </Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSvg fill={owner ? primary : on}/>

              <Text style={[
            styles.player,
            { color: owner ? primary : on }
        ]}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>);
}
