import React, { useRef, useState } from 'react'
import './ImageGenerator.css'
import image from '../Assests/automotive.jpg'

const ImageGenerator = () => {
    const [image_url, setImage_url] = useState("/");
    let inputRef = useRef(null);

    const [loading, setLoading] = useState(false);

    const ImageGenerator = async () =>{
        if(inputRef.current.value===""){
            return 0;
        }
        setLoading(true);
        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:
                    "Bearer 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",
                    "User-Agent":"Chrome",
                },
                body:JSON.stringify({
                    prompt:`${inputRef.current.value}`,
                    n:1,
                    size:"256x256",
                }),
            }
        );
        let data = await response.json();
        console.log(data);
        let data_array = data.data;
        setImage_url(data_array[0].url);
        setLoading(false);
    }

  return (
    <div className='ai-image-generator'>
        <div className='header'>Automated <span>Image</span> Creator</div>
        <div className='img-loading'>
            <div className='image'>
                <img src={image_url==="/"?image:image_url} alt=""></img>
            </div>
            <div className='loading'>
                <div className={loading ? "loading-bar-full":"loading-bar"}></div>
                <div className={loading ? "loading-text" : "display-none"}>Loading...</div>
            </div>
        </div>
        <div className='search-box'>
            <input type='text' ref={inputRef} className='search-input' placeholder='Describe what you want to see ?'></input>
            <div className='generate-btn' onClick={()=>{ImageGenerator()}}>Generate</div>
        </div>
    </div>
  )
}

export default ImageGenerator
