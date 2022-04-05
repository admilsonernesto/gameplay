import React, { ReactNode } from 'react';
declare type User = {
    id: string;
    username: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;
};
declare type AuthContextData = {
    user: User;
    loading: boolean;
    signIn: () => Promise<void>;
    singOut: () => Promise<void>;
};
declare type AuthProviderProps = {
    children: ReactNode;
};
export declare const AuthContext: React.Context<AuthContextData>;
declare function AuthProvider({ children }: AuthProviderProps): JSX.Element;
declare function useAuth(): AuthContextData;
export { AuthProvider, useAuth };
