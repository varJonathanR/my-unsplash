import axios from "@/api/axios";
import type { AxiosResponse } from "axios";
import type { User } from "@/utils/types";

export const registerReq = async (user: User): Promise<AxiosResponse> => axios.post("/auth/register", user);

export const loginReq = async (user: User): Promise<AxiosResponse> => axios.post("/auth/login", user);

export const verifyTokenReq = async (): Promise<AxiosResponse> => axios.get("/auth/verify");

export const logoutReq = (): Promise<AxiosResponse> => axios.post("auth/logout");