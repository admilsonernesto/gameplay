var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { createContext, useContext, useState, useEffect, } from 'react';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { SCOPE } = process.env;
const { CLIENT_ID } = process.env;
const { CDN_IMAGE } = process.env;
const { REDIRECT_URI } = process.env;
const { RESPONSE_TYPE } = process.env;
import { api } from '../services/api';
import { COLLECTION_USERS } from '../configs/database';
export const AuthContext = createContext({});
function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    function signIn() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('signIn');
                setLoading(true);
                const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
                const { type, params } = yield AuthSession
                    .startAsync({ authUrl });
                if (type === "success" && !params.error) {
                    console.log('deu bom');
                    api.defaults.headers.common['Authorization'] = `Bearer ${params.access_token}`;
                    const userInfo = yield api.get('/users/@me');
                    const firstName = userInfo.data.username.split(' ')[0];
                    userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;
                    console.log(firstName);
                    console.log(params.access_token);
                    const userData = Object.assign(Object.assign({}, userInfo.data), { firstName, token: params.access_token });
                    yield AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));
                    setUser(userData);
                }
            }
            catch (_a) {
                throw new Error('Não foi possível autenticar!');
            }
            finally {
                setLoading(false);
            }
        });
    }
    function singOut() {
        return __awaiter(this, void 0, void 0, function* () {
            setUser({});
            yield AsyncStorage.removeItem(COLLECTION_USERS);
        });
    }
    function loadUserStorageData() {
        return __awaiter(this, void 0, void 0, function* () {
            const storage = yield AsyncStorage.getItem(COLLECTION_USERS);
            if (storage) {
                const userLogged = JSON.parse(storage);
                api.defaults.headers.common['Authorization'] = `Bearer ${userLogged.token}`;
                setUser(userLogged);
            }
        });
    }
    useEffect(() => {
        loadUserStorageData();
    }, []);
    return (<AuthContext.Provider value={{
            user,
            loading,
            signIn,
            singOut
        }}>
      {children}
    </AuthContext.Provider>);
}
function useAuth() {
    const context = useContext(AuthContext);
    return context;
}
export { AuthProvider, useAuth };
