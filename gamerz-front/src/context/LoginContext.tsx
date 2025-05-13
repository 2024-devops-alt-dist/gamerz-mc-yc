import { createContext, useState, ReactNode } from 'react';

// Definit la structure de l'utilisateur 
type UserInfo = {
    isLoggedIn: boolean;
    userId: string | null;
    userName: string | null;
    isAdmin: boolean;
    isAccepted: boolean;
    openToPlay: boolean;
};

// Définit le type du contexte de connexion
// Le contexte de connexion contient l'état de l'utilisateur et une fonction pour le mettre à jour
type LoginContextType = {
    user: UserInfo;
    setUser: (user: UserInfo) => void;
};

// Définit l'utilisateur par défaut, tout est à null ou faux tant que l'utilisateur n'est pas connecté
const defaultUserInfo: UserInfo = {
    isLoggedIn: false,
    userId: null,
    userName: null,
    isAdmin: false,
    isAccepted: false,
    openToPlay: false
}

// Création du contexte de connexion avec une valeur par défaut
const LoginContext = createContext<LoginContextType>({
    user: defaultUserInfo,
    setUser: () => {},
});

// Création d'un hook personnalisé pour utiliser le contexte de connexion comme composant React (?)
export const LoginProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserInfo>(defaultUserInfo);

    return (
        <LoginContext.Provider value={{ user, setUser }}>
            {children}
        </LoginContext.Provider>
    );
};

// Exportation du contexte de connexion pour l'utiliser dans d'autres composants -- à mettre dans un fichier séparé

// export const useLogin = () => {
//     const context = useContext(LoginContext);
//     if (!context) {
//         throw new Error('useLogin must be used within a LoginProvider');
//     }
//     return context;
// };

// export const useLogin = () => useContext(LoginContext);