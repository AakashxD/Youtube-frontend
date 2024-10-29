import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';

const WatchPage = () => {
  const dispatch=useDispatch();
    const [searchParams,setSearchParams]=useSearchParams();
   console.log(searchParams.get("v"))
    // searchParams.id
    // URL searchParams
    useEffect(()=>{
          dispatch( closeMenu()) ;
    },[])
  return (
    <div className='p-2 m-5 '>
      <iframe width="1000" height="450" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage