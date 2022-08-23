import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

//Hooks => es una funcion que regresa algo, depende de cada funcion 
export const useFechGifs = (category) => {

    const [images, setImagnes] = useState([]);
    const [isLoading, setLoading] = useState(true);


    const getImagnes = async() => {
        const newImagenes = await getGifs(category);
        setImagnes(newImagenes);
        setLoading(false)

    }
    useEffect(() => {
        getImagnes()
    }, [])

    return {
        images,
        isLoading
    }
}