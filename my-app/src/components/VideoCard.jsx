import React from 'react'
import playButton from '../Utils/VideoPlayButton.png'
const VideoCard = ({item}) => {
const {viewCount,likeCount ,commentCount}=item.statistics;
const {url}=item.snippet.thumbnails.high;
const {title}=item.snippet;
const{ channelTitle}=item.snippet

  // function to format the numbers
  const formatCount = (count) => {
    return count > 1000 ? `${Math.floor(count / 1000)}K` : count;
  };
  return (

<div className=" p-2 m-2 w-72 shadow-lg hover:shadow-lg hover:scale-105 hover:border-red-500 ">
    <img src={url} alt="thumbnail" className="  rounded-lg" />
    <div className="">
      <h2 className="text-lg font-medium">{title}</h2>
      <h3 className='text-pretty'>{channelTitle}  </h3>
      <div className="text-sm text-gray-600">
      <p>Views: {formatCount(viewCount)} Likes: {formatCount(likeCount)} </p>
         
      </div>
    </div>
  </div>
   
  )
}

export default VideoCard