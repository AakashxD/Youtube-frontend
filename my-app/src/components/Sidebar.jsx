import React from 'react'

const Sidebar = () => {
  return (
    <div className='col-span-1 p-4 shadow-lg w-48'>
       <ul>
    <li>Home</li>
    <li>Shorts</li>
    <li>Video</li>
    <li>live</li>
   </ul>
      <h1 className='font-bold'>Subscription</h1>
   <ul>
    <li>Music</li>
    <li>Gaming</li>
    <li>Sports</li>
    <li>Movies</li>
   </ul>
   <h1 className='font-bold'>Watch Later</h1>
   <ul>
    <li>Saved</li>
    <li>Private </li>
    <li>Sports</li>
    <li>Movies</li>
   </ul>



    </div>
  )
}

export default Sidebar