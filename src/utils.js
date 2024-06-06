//?     Toma la ruta relativa y la URL de nuestro sitio, las junta y devuelve
export const getImageURL = (path) => 
    new URL(`/assets/${path}`, import.meta.url).href