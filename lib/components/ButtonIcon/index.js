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
import { Text, Image, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';
export function ButtonIcon(_a) {
    var { title } = _a, rest = __rest(_a, ["title"]);
    return (<RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}/>
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>);
}
