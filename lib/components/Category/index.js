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
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
export function Category(_a) {
    var { title, icon: Icon, checked = false, hasCheckBox = false } = _a, rest = __rest(_a, ["title", "icon", "checked", "hasCheckBox"]);
    const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;
    return (<RectButton {...rest}>
      <LinearGradient style={styles.container} colors={[secondary50, secondary70]}>
        <LinearGradient style={[styles.content, { opacity: checked ? 1 : 0.5 }]} colors={[checked ? secondary85 : secondary50, secondary40]}>
          {hasCheckBox &&
            <View style={checked ? styles.checked : styles.check}/>}

          <Icon width={48} height={48}/>

          <Text style={styles.title}>
            {title}
          </Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>);
}
