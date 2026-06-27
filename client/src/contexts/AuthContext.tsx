import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

interface AuthContextType {
  token: string | null;
  user: User | null;

  login: (token: string, user: User) => void;

  logout: () => void;

  isAuthenticated: boolean;

  loading: boolean;
}

const AuthContext =
    createContext<AuthContextType | null>(null);

export function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [token, setToken] = useState<string | null>(
        null
    );

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (storedToken) {
            setToken(storedToken);
        }

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        setLoading(false);
    }, []);

    const login = (
        token: string,
        user: User
    ) => {
        localStorage.setItem("token", token);

        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );

        setToken(token);

        setUser(user);
    };

    const logout = () => {
        localStorage.removeItem("token");

        localStorage.removeItem("user");

        setToken(null);

        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                user,
                login,
                logout,
                isAuthenticated: !!token,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    const context =
        useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuthContext must be used inside AuthProvider"
        );
    }

    return context;
}