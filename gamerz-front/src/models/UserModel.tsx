export interface User {
    pseudo: string;
    email: string;
    password: string;
    motivation: string;
    isAccepted?: boolean;
    openToPlay?: boolean
}