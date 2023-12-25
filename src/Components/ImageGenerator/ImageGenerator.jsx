import React from 'react'
import './ImageGenerator.css'
import image from '../Assests/automotive.jpg'

const ImageGenerator = () => {
  return (
    <div className='ai-image-generator'>
        <div className='header'>Ai image <span>Generator</span></div>
        <div className='img-loading'>
            <div className='image'>
                <img src={image} alt=""></img>
            </div>
        </div>
        <div className='search-box'>
            <input type='text' className='search-input' placeholder='Describe what you want to see ?'></input>
            <div className='generate-btn'>Generate</div>
        </div>
    </div>
  )
}

export default ImageGenerator
