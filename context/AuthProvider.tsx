import { createContext, useEffect, useState } from 'react';
import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import { router } from 'expo-router';
import { api } from '@/api/axios';

interface IContexto {
    tokenState: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    checkToken: Function
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
            const response = await axios.post('http://192.168.137.1:3000/auth', dados);

            console.log(response.data)

            if (response.data.error) {
                throw new Error('Credenciais inválidas');
            }

            const { token } = response.data as { token: string, name: string };
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;

            await AsyncStorage.setItem('token', token);

            setTokenState(token);
            router.replace('/home');

        } catch (error) {
            throw error;
        }
    }

    async function logout() {
        try {
            setTokenState(null);
            await AsyncStorage.removeItem('token');

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

    function checkToken() {
        useEffect(() =>{
            (async () => {
                const tokenStorage = await AsyncStorage.getItem('token');
                try {
                    const data = await api.get("/", {
                        headers:{
                            Authorization: `Bearer ${tokenStorage}`
                        }
                    })
                    if(data.status) router.replace("/home")

                }
                catch(e){
                    router.replace("/login")
                }
                

            })()
        },[])
        
    }

    return (
        <AuthContext.Provider value={{ tokenState, login, logout, checkToken }}>
            {children}
        </AuthContext.Provider>
    );
}
