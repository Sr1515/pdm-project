import { createContext, useEffect, useState } from 'react';
import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from 'axios';
import { router } from 'expo-router';

interface IContexto {
    tokenState: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext({} as IContexto);

interface IProps {
    children: React.ReactNode;
}

export function AuthProviderContext({ children }: IProps) {
    const [tokenState, setTokenState] = useState<string | null>(null);


    async function login(email: string, password: string) {
        const dados = { email, password };
        try {
            const response = await axios.post('http://192.168.2.101:3000/auth', dados);

            if (response.data.error) {
                throw new Error('Credenciais inválidas');
            }

            const { token } = response.data as { token: string, name: string };

            axios.defaults.headers.common.Authorization = `Bearer ${token}`;

            await AsyncStorage.setItem('token', token);
            setTokenState(token);

        } catch (error) {
            throw new Error('Erro ao tentar fazer login. Verifique suas credenciais.');
        }
    }

    async function logout() {
        setTokenState(null);
        await AsyncStorage.removeItem('token');
        axios.defaults.headers.common.Authorization = '';
        console.log('removeu')
        router.replace('/login');
    }

    useEffect(() => {
        (async () => {
            const tokenStorage = await AsyncStorage.getItem('token');

            if (tokenStorage) {
                axios.defaults.headers.common.Authorization = `Bearer ${tokenStorage}`;
                setTokenState(tokenStorage);
            }
        })()
    }, []);

    return (
        <AuthContext.Provider value={{ tokenState, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
