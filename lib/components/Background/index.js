import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
export function Background({ children }) {
    const { secondary80, secondary100 } = theme.colors;
    return (<LinearGradient style={styles.container} colors={[secondary80, secondary100]}>
      {children}
    </LinearGradient>);
}
