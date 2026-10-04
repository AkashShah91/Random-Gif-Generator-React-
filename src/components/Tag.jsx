import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import axios from 'axios'
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
import useGif from '../hooks/useGif'
const Tag = () => {
  const [tag,setTag]=useState('car');
//   const [gif,setGif]=useState('');
//   const [loading,setLoading]=useState(false);
//   async function fetchData(){
//         setLoading(true);
//         const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
//         const {data}=await axios.get(url);
//         console.log(data);
//         const imageSource=data.data.images.downsized_large.url;
//         setGif(imageSource);
//         setLoading(false);
//   }
//         useEffect(()=>{
//             fetchData();
//         },[]);
    const {gif,loading,fetchData}=useGif(tag);
    function clickHandler(){
        fetchData(tag);
    }
    function changeHandler(event){
        setTag(event.target.value);
    }
  return (
    <div className="w-1/2 h-[450px] bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
        <h1  className="text-3xl uppercase underline font-bold">Random {tag} Gif</h1>
        {
          loading?(<Spinner/>):(<img src={gif}  className="h-[250px] w-auto object-contain"/>)
        }
        <input type="text"  className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center  bg-white"
                onChange={changeHandler}
                value={tag}
        />
        <button className="w-10/12 bg-yellow-500 text-xl py-2 rounded-lg font-bold"
                onClick={clickHandler}
        >
            Generate
        </button>
    </div>
  )
}

export default Tag
