import React, { useRef, useState } from 'react'
import './Image.css'
import image from '../assets/default_image.svg'
function ImageGenerator() {

  return (
    <div className='ai-image-generator'>
      <div className="header">Ai image <span>Generator</span></div>
      <div className="img-loading">
        <div className="image"><img src={image_url==="/"?image:image_url} /></div>
      </div>
      <div className="search-box">
        <input className='search-input'ref={inputRef} type='text' placeholder='Describe What You Want To See'/>
        <div className="generate-btn" onClick={()=>{ImageGenerator()}}>Generate</div>
      </div>
    </div>
  )
}

export default ImageGenerator