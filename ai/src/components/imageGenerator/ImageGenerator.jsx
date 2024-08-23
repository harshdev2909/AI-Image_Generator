import React, { useRef, useState } from 'react'
import './Image.css'
import image from '../assets/default_image.svg'
function ImageGenerator() {

  const[image_url,setImage_url] = useState("/");
  let inputRef = useRef(null);

  const ImageGenerator = async ()=>{
    if(inputRef.current.value===""){
      return 0;
    }
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method : "POST",
        headers:{
          "Content-Type" : "application/json",
          Authorization : " Bearer ",
          "User-Agent" : "Chrome",
        },
        body:JSON.stringify({
          prompt : `${inputRef.current.value}`,
          n:1,
          size : "512x512"
        }),
      }
      
    );
    let data = await response.json();
    console.log(data)
  }
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