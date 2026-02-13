import { createContext, useState, type ReactNode, useEffect } from "react";
import type { User } from "../types/user.types";
import { getUserByToken } from "../services/auth.service";
import { getSession, setSession } from "./auth.utils";

type AuthStateType = {
    user: User | null,
    isInitialized: boolean,
}

type AuthContextType = AuthStateType & {
    isAuthorized: boolean,
    setUser: (user: User) => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

type Props = {
    children: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
    const [authState, setAuthState] = useState<AuthStateType>({ user: null, isInitialized: false });

    const setUser = (user: User) => {
        setAuthState({ ...authState, user })
    }

    useEffect(() => {
        const initialize = async () => {
            const token = getSession()
            try {
                if (token) {
                    const user = await getUserByToken(token)
                    setSession(token)
                    setUser(user)
                }
            } catch (error) {
                console.error(error);
            } finally {
                setAuthState((prev) => ({ ...prev, isInitialized: true }))
            }
        }

        initialize();
    }, [])

    return <AuthContext.Provider value={{ ...authState, setUser, isAuthorized: !!authState.user }}>
        {children}
    </AuthContext.Provider>
}