export interface User {
    pseudo: string;
    email: string;
    password: string;
    motivation: string;
    isAdmin: boolean;
    isAccepted?: boolean;
    openToPlay?: boolean;
}

export interface Candidacy extends Omit<User, 'password'> {
    id: string;
    status: string;
    createdAt: Date;
}