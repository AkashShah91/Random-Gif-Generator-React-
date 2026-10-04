const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    async function fetchData(tag) {
        setLoading(true);
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
        console.log(data);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }
    useEffect(() => {
        fetchData();
    }, []);
    return { gif, loading, fetchData }
}

export default useGif
