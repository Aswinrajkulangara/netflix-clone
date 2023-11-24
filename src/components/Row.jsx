import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Row.css'




function Row({title,fetchUrl,isPoster}) {
    // console.log(fetchUrl);
    const base_url = "https://image.tmdb.org/t/p/original/";


    const [allmovie,setAllmovie]=useState()

    const fetchData = async ()=>{
      const {data} = await instance.get(fetchUrl)
      // const {results}=data
      setAllmovie(data.results);
    }
    console.log(allmovie);

    useEffect(()=>{
      fetchData()
    },[])



  return (
   

    <div className='row'>

      <h1>{title}</h1>
      <div className="movie-row">

        {
          allmovie?.map(item=>(
            <img className={`movie${isPoster && 'movie-poster'}`} src= {`${base_url}${ isPoster?item.poster_path:item.backdrop_path}`}  alt="no image" />
          ))
        }

      </div>
    </div>

  )
}

export default Row;