export type User = {
    id?: string;
    username?: string;
    email?: string;
    password?: string
} 

export type ErrorMessages = Array<string>;

export type Photo = {
    url: string;
    title: string;
}

export type GetPhoto = {
    id: string;
    url: string;
    title: string;
}

export type DeletePhoto = {
    id: string;
    password: string;
}
