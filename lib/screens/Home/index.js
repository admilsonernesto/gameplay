var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CategorySelect } from '../../components/CategorySelect';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { Load } from '../../components/Load';
import { styles } from './styles';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
export function Home() {
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState([]);
    const navigation = useNavigation();
    function handleCategorySelect(categoryId) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }
    function handleAppointmentDetails(guildSelected) {
        navigation.navigate('AppointmentDetails', { guildSelected });
    }
    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate');
    }
    function loadAppointments() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
            const storage = response ? JSON.parse(response) : [];
            if (category) {
                setAppointments(storage.filter(item => item.category === category));
            }
            else {
                setAppointments(storage);
            }
            setLoading(false);
        });
    }
    useFocusEffect(useCallback(() => {
        loadAppointments();
    }, [category]));
    return (<Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate}/>
      </View>
    
      <CategorySelect categorySelected={category} setCategory={handleCategorySelect}/>
    
    {loading ? <Load /> :
            <>
        <ListHeader title="Partidas agendadas" subtitle={`Total ${appointments.length}`}/>

        <FlatList data={appointments} keyExtractor={item => item.id} renderItem={({ item }) => (<Appointment data={item} onPress={() => handleAppointmentDetails(item)}/>)} ItemSeparatorComponent={() => <ListDivider />} contentContainerStyle={{ paddingBottom: 69 }} style={styles.matches} showsVerticalScrollIndicator={false}/>
      </>}
    </Background>);
}
