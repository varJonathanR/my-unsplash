import axios from "@/api/axios";
import type { AxiosResponse } from "axios";
import type { DeletePhoto, Photo } from "@/utils/types";

export const getPhotosReq = (): Promise<AxiosResponse> => axios.get("/gallery/getAll");

export const addPhotoReq = (photo: Photo): Promise<AxiosResponse> => axios.post("/gallery/add", photo);

export const deletePhotoReq = (credentials: DeletePhoto) => axios.delete(`/gallery/delete`, {
    data: {
        id: credentials.id,
        password: credentials.password
    }
});