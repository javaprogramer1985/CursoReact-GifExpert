import React, { useState,useEffect } from 'react'
import { GifCardItem } from './GifCardItem';
import { getGifs } from '../helpers/getGifs'




export const GifGrid = ({category}) => {
    
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages);
    };

    useEffect( () => {
        getImages();        
    },[]);
    
    
    
    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                {
                    //Desestructuracion de images
                    images.map( (image) => (
                        <GifCardItem 
                            key={image.id}
                            // Se envian todas las propiedades que contenga el array como props
                            {...image}
                        />
                    ))  
                }
            </div>
        </>
    )
}
