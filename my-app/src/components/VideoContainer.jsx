import React,{useEffect,useState} from 'react'
import { API_Video } from '../Utils/const.config';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';


const VideoContainer = () => {
const [videos,setVideos]=useState([]);

  useEffect(()=>{
      getVideos();
  },[])
  const getVideos=async ()=>{
    const data =await fetch(API_Video);
    const jsonD=await data.json();
    setVideos(jsonD.items);

    console.log(jsonD.items)
  }
  return (
    <div className='flex flex-wrap p-7 gap-4 '>
       {videos.map((item) => (
       <Link to={"/watch?v="+item.id} > <VideoCard key={item.id} item={item} /> </Link> // Render VideoCard for each video
      ))}
    </div>

  )
}

export default VideoContainer;