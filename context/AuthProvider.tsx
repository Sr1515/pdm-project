import { createContext, useEffect, useState } from 'react';
import React from 'react';

import localStorage from '@/utils/localStorage';

import { api } from '@/api/axios';

interface IUser {
    id: string;
    name: string;
}

interface IContextAuth {
    user: IUser | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext({} as IContextAuth);


interface ResponseDataType {
    user: IUser | null,
    token: string;
}

type Props = {
    children: React.ReactNode;
}

export function AuthSupplier({ children }: Props) {
    const [user, setUser] = useState<IUser | null>(null);

    async function login(email: string, password: string): Promise<void> {
        try {

            const data = {
                email,
                password
            }

            const response = await api.post<ResponseDataType>('/auth', data);
            const { token, user } = response.data as ResponseDataType;
            api.defaults.headers.common.Authorization = `Bearer ${token}`;
            localStorage.setItem('auth.token', token);
            localStorage.setItem('auth.user', JSON.stringify(user));
            setUser(user);
            console.log(user)

        } catch (error) {
            console.log(error)
        }
    }

    async function logout(): Promise<void> {
        setUser(null);
        localStorage.removeItem('auth.token');
        localStorage.removeItem('auth.user');
    }

    useEffect(() => {
        (async () => {
            const token = await localStorage.getItem('auth.token');
            const user = await localStorage.getItem('auth.user');
            if (user && token) {
                api.defaults.headers.common.Authorization = `Bearer ${token}`;
                setUser(JSON.parse(user))
            }
        })()
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>

    )
}
