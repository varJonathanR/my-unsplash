import { atom } from "nanostores";
import type { DeletePhoto, ErrorMessages, GetPhoto, Photo } from "@/utils/types";
import { getPhotosReq, addPhotoReq, deletePhotoReq  } from "@/api/gallery";

export const $gallery = atom<Array<GetPhoto>>([]);
export const $galleryError = atom<ErrorMessages | null>(null);


export const $allPhotos = async () => {
    try {
        const res = await getPhotosReq();
    
        $gallery.set(res.data);
    } catch (error: any) {
        $galleryError.set(error.response.data);
    }
};

export const $addPhoto = async (photo: Photo) => {
    try {
        const res = await addPhotoReq(photo);
        
        $gallery.set(res.data);
        window.location.href = "/";
    } catch (error: any) {
        $galleryError.set(error.response.data);
    }
};

export const $deletePhoto = async (credentials: DeletePhoto) => {
    try {
        await deletePhotoReq(credentials);
        window.location.href = "/";
    } catch (error: any) {
        $galleryError.set(error.response.data);
    }
};