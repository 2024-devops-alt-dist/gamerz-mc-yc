import { createContext, useState, ReactNode } from 'react';

// Definit la structure de l'utilisateur 
type UserInfo = {
    isLoggedIn: boolean;
    userId: string | null;
    pseudo: string | null;
    isAdmin: boolean;
    isAccepted: boolean
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
    pseudo: null,
    isAdmin: false,
    isAccepted: false
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

export  { LoginContext };

