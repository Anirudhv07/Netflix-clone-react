import React,{useEffect,useState} from 'react'
import "./Rowpost.css"
import Youtube from "react-youtube"
import {imgURL } from '../../constants/Constants'
import axios from '../../axios'

function Rowpost(props) {
  const [movie,setMovie]=useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
    
      setMovie(response.data.results)
  }).catch((err)=>{
    alert(err)
  })
  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movie.map((movie)=>
            <img  className={props.isSmall?'smallPoster':'poster'} alt='poster' src={`${imgURL+movie.backdrop_path}`}/>
          )}

            
        </div>
     
    </div>
  )
}

export default Rowpost
