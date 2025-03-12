export interface User {
    pseudo: string;
    email: string;
    password: string;
    candidacyText: string;
    idUser?: number;
    isAccepted?: boolean;
    openToPlay?: boolean
}