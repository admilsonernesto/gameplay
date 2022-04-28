import React from 'react';
import { Text, Image, View, Button, ButtonProps } from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = ButtonProps & {
  title: string;
}

export function ButtonIcon({ title, ...rest } : Props){
  return(
    <View style={styles.container} >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Button 
        color={theme.colors.primary}
        title= { title }        
        {...rest }
      >
      </Button>
    </View>
  );
}

