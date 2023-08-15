import React, { Fragment } from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {data: images, loading} = useFetchGifs(category);

    return (
        <Fragment>
            <h3 className='animate__animated animate__fadeIn animate__delay-1s'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading</p>}
            <div className='card-grid'>
                {
                    images.map( (img) => {
                        return <GifGridItem
                            key={img.id}
                            {...img}
                        ></GifGridItem>
                    })
                }  
            </div>
        </Fragment>
    );

}
