import { atom } from "nanostores";
import Cookies from "js-cookie";
import { registerReq, loginReq, verifyTokenReq, logoutReq } from "@/api/auth";
import type { User, ErrorMessages } from "@/utils/types";

export const $user = atom<User | null>(null);

export const $isAuthenticated = atom<boolean>(false);
export const $authError = atom<ErrorMessages | null>(null);

export const $signup = async (user: User) => {
    try {
        const res = await registerReq(user);
        $user.set(res.data);
        $isAuthenticated.set(true);
        window.location.href = "/";
    } catch (error: any) {
        $authError.set(error.response.data);
    }
};

export const $signin = async (user: User) => {
    try {
        const res = await loginReq(user);
        $user.set(res.data);
        $isAuthenticated.set(true);
        window.location.href = "/";
    } catch (error: any) {
        $authError.set(error.response.data);
    }
};

export const $validateToken = async () => {
    const cookies = Cookies.get();
    if (!cookies) return;

    if (cookies.token) {
        try {
            const res = await verifyTokenReq();
            
            if (!res.data) $isAuthenticated.set(false);

            $isAuthenticated.set(true);
            $user.set(res.data);
        } catch (error) {
            $isAuthenticated.set(false);
            $user.set(null);
        }
    }
};

export const $logout = async () => {
    try {
        await logoutReq();
        $isAuthenticated.set(false);
        $user.set(null);
        window.location.href = "/";
    } catch (error: any) {
        $authError.set(error.response.data)
    }
};
