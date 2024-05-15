export const validateURL = (url: string) => {
    const unsplashRegex = /^https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+/;
    return unsplashRegex.test(url);
};

export async function isValidPhotoUrl (url: string) {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const contentType = response.headers.get('content-type');
            return contentType && contentType.startsWith('image');
        }
        return false;
    } catch (error) {
        return false;
    }
};