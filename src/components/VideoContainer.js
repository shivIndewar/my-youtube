import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = ({YOUTUBEVIDEO_API}) => {
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
   getVideos();
  }, []);
  

  const getVideos = async () => {
    const data = await fetch(YOUTUBEVIDEO_API);
    var json = await data.json();
    setVideos(json.items);
  }
  if(videos.length === 0 ) return;
  return (
    <div className='flex flex-wrap'>
        {videos.map((video)=>( <Link key={video.id} to={"watch?v="+video.id}><VideoCard key={video.id} info={video}/></Link> ))}
    </div>
  )
}

export default VideoContainer;