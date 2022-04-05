var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Guild } from '../../components/Guild';
import { Load } from '../../components/Load';
import { ListDivider } from '../../components/ListDivider';
import { styles } from './styles';
import { api } from '../../services/api';
export function Guilds({ handleGuildSelect }) {
    const [guilds, setGuilds] = useState([]);
    const [loading, setLoading] = useState(true);
    function fetchGuilds() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield api.get('/users/@me/guilds');
            setGuilds(response.data);
            setLoading(false);
        });
    }
    useEffect(() => {
        fetchGuilds();
    }, []);
    return (<View style={styles.container}>
      {loading ? <Load /> :
            <FlatList data={guilds} keyExtractor={item => item.id} renderItem={({ item }) => (<Guild data={item} onPress={() => handleGuildSelect(item)}/>)} showsVerticalScrollIndicator={false} ItemSeparatorComponent={() => <ListDivider isCentered/>} ListHeaderComponent={() => <ListDivider isCentered/>} contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }} style={styles.guilds}/>}
    </View>);
}
