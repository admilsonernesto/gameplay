import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Avatar } from '../Avatar';
import { theme } from '../../global/styles/theme';
export function Member({ data }) {
    const { on, primary } = theme.colors;
    const isOnline = data.status === 'online';
    return (<View style={styles.container}>
      <Avatar urlImage={data.avatar_url}/>

      <View>
        <Text style={styles.title}>
          {data.username}
        </Text>

        <View style={styles.status}>
          <View style={[
            styles.bulletStatus,
            {
                backgroundColor: isOnline ? on : primary
            }
        ]}/>

          <Text style={styles.nameStatus}>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </Text>
        </View>
      </View>
    </View>);
}
