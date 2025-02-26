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
            const response = await axios.post('http://192.168.2.103:3000/auth', dados);

            console.log(response.data)

            if (response.data.error) {
                throw new Error('Credenciais inválidas');
            }

            const { token } = response.data as { token: string, name: string };
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;

            await AsyncStorage.setItem('token', token);
            console.log('Token salvo no AsyncStorage:', token);

            setTokenState(token);
            router.replace('/home');

        } catch (error) {
            console.error('Erro ao fazer login:', error);
            throw error;
        }
    }

    async function logout() {
        try {
            setTokenState(null);
            await AsyncStorage.removeItem('token');

            console.log('Token removido do AsyncStorage');

            axios.defaults.headers.common.Authorization = null;
            router.replace('/login');

        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
    }

    useEffect(() => {
        (async () => {
            try {
                const tokenStorage = await AsyncStorage.getItem('token');
                console.log('Token recuperado do AsyncStorage:', tokenStorage);

                if (tokenStorage) {
                    axios.defaults.headers.common.Authorization = `Bearer ${tokenStorage}`;
                    setTokenState(tokenStorage);
                }
            } catch (error) {
                console.error('Erro ao recuperar o token do AsyncStorage:', error);
            }
        })();
    }, []);

    return (
        <AuthContext.Provider value={{ tokenState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
