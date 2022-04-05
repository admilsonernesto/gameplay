var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import { View, Text, Image, Alert, ActivityIndicator, Button } from 'react-native';
import { useAuth } from '../../hooks/auth';
import IllustrationImg from '../../assets/illustration.png';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
export function SignIn() {
    const { loading, signIn } = useAuth();
    function handleSignIn() {
        return __awaiter(this, void 0, void 0, function* () {
            Alert.alert('handleSignInn!');
            try {
                yield signIn();
            }
            catch (_a) {
                Alert.alert('Erro no login!');
            }
        });
    }
    function agoravai() {
        Alert.alert('agora foi!');
    }
    return (<Background>
      <View style={styles.container}>     
        <Image source={IllustrationImg} style={styles.image} resizeMode="stretch"/>

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize suas {'\n'} 
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'} 
            favoritos com seus amigos
          </Text>

          <Button title='ava' onPress={agoravai}/>  


          {loading ? <ActivityIndicator color={theme.colors.primary}/> :
            <ButtonIcon title="Entrar com Discord" onPress={handleSignIn}/>}                             
        </View>
      </View>
    </Background>);
}
