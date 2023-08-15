import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [first, setfirst] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setfirst( {
                    data: imgs,
                    loading: false
                })
            });
    }, [category]);

    return first;
};
