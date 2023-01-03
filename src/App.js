import React from 'react'
import './App.css'
import { useState } from 'react'
const UrlHandler = () =>{

  const [longUrl, setLongUrl] = useState('')
  const [shortUrl,setShortUrl] = useState('')   
  const postData = (data) =>{
       
         fetch('http://localhost:3001/url/shorten',{
        method: 'POST',
        mode: 'cors',
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          longUrl:data
        })
       }) 
       .then(response => response.json())
       .then((data) => {
        setShortUrl(data.data.shortUrl)   
      })
      setLongUrl('');                                                            
           
  }              

   return <div className='url'>
        <h4>Short your LongUrl</h4>
        <h5>URL: <input type="text" size={50} value={longUrl} onChange={(e)=> setLongUrl(e.target.value)}/> </h5>
        <button onClick={()=>postData(longUrl)}> Submit </button>
        <h3>{shortUrl}</h3>
      </div>
}  

export default UrlHandler;       