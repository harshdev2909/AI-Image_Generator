const[image_url,setImage_url] = useState("/");
  let inputRef = useRef(null);

  const ImageGenerator = async ()=>{
    if(inputRef.current.value===""){
      return 0;
    }
    const response = await fetch(
      "",
      {
        method : "POST",
        headers:{
          "Content-Type" : "application/json",
          Authorization : " Bearer",
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