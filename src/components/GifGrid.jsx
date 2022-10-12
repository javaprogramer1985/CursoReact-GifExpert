import { GifCardItem } from './GifCardItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    
    const {images,isLoading} = useFetchGifs(category);

    console.log(isLoading);
    
    return (
        <>
            <h3>{category}</h3>
            {
                // isLoading ? 
                // <h2>Cargando...</h2>
                // null

                isLoading && (<h2>Cargando...</h2>)
            }
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
