import { useEffect, useState } from 'react';
import {getGifs} from '../helpers/getGifs';
import { GifItem } from './GifItem';
import {useFechGifs} from '../hooks/useFechGifs'

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFechGifs(category);
    console.log({images, isLoading});

    return(
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2 className>Cargando ...</h2>)
            }
            
            <div className="card-gird">
                {
                    images.map((image ) => (
                        <GifItem 
                        key={image.id} 
                        {...image}
                        />
                    ))
                }
            </div>
        
        </>
    )
}

