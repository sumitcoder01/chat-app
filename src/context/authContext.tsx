import { useContext, useState, useEffect, createContext, ReactNode } from "react";
import { UserAuth } from '../interfaces/authUser';
import { Auth } from "../constants/auth";

const AuthContext = createContext<{
    auth?: UserAuth | null;
    login: (userData: UserAuth) => void;
    logout: () => void;
}>({
    logout: function (): void {
        throw new Error("Function not implemented.");
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    login: function (_userData: UserAuth): void {
        throw new Error("Function not implemented.");
    }
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [loading, setLoading] = useState<boolean>(true);
    const [auth, setAuth] = useState<UserAuth | null>(null);

    useEffect(() => {
        const storedAuthData = localStorage.getItem(Auth);
        if (storedAuthData) {
            const parsedAuthData: UserAuth = JSON.parse(storedAuthData);
            setAuth(parsedAuthData);
        }
        setLoading(false);
    }, []);

    const login = (userData: UserAuth) => {
        localStorage.setItem(Auth, JSON.stringify(userData));
        setAuth(userData);
    };

    const logout = () => {
        localStorage.removeItem(Auth);
        setAuth(null);
    };

    const value = { auth, login, logout };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
