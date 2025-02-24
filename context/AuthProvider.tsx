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

    // Função para fazer login
    async function login(email: string, password: string) {
        const dados = { email, password };
        try {
            const response = await axios.post('http://192.168.2.101:3000/auth', dados);

            if (response.data.error) {
                throw new Error('Credenciais inválidas');
            }

            const { token } = response.data as { token: string, name: string };

            // Configura o cabeçalho de autenticação
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;

            // Salva o token no AsyncStorage
            await AsyncStorage.setItem('token', token);
            console.log('Token salvo no AsyncStorage:', token); // Log para depuração

            // Atualiza o estado do token
            setTokenState(token);

            // Redireciona para a tela inicial após o login
            router.replace('/home');

        } catch (error) {
            console.error('Erro ao fazer login:', error); // Log para depuração
            throw new Error('Erro ao tentar fazer login. Verifique suas credenciais.');
        }
    }

    // Função para fazer logout
    async function logout() {
        try {
            // Remove o token do estado e do AsyncStorage
            setTokenState(null);
            await AsyncStorage.removeItem('token');
            console.log('Token removido do AsyncStorage'); // Log para depuração

            // Remove o cabeçalho de autenticação
            axios.defaults.headers.common.Authorization = '';

            // Redireciona para a tela de login
            router.replace('/login');
        } catch (error) {
            console.error('Erro ao fazer logout:', error); // Log para depuração
        }
    }

    // Verifica se há um token salvo ao carregar o aplicativo
    useEffect(() => {
        (async () => {
            try {
                const tokenStorage = await AsyncStorage.getItem('token');
                console.log('Token recuperado do AsyncStorage:', tokenStorage); // Log para depuração

                if (tokenStorage) {
                    // Configura o cabeçalho de autenticação
                    axios.defaults.headers.common.Authorization = `Bearer ${tokenStorage}`;

                    // Atualiza o estado do token
                    setTokenState(tokenStorage);
                }
            } catch (error) {
                console.error('Erro ao recuperar o token do AsyncStorage:', error); // Log para depuração
            }
        })();
    }, []);

    return (
        <AuthContext.Provider value={{ tokenState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}