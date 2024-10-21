import React, { useEffect, useState } from 'react'
import { YOUTUBE_CHANNEL_API } from '../utils/constants';

const CardContentDetails = ({cardDetails}) => {

  const {snippet } = cardDetails;
  const {channelTitle,title } = snippet;
  const [channelDwtails, setChannelDwtails] = useState([]);

  useEffect(()=>{
    getChanelInfo();
  },[]);

  const getChanelInfo = async ()=>{
    const channelInfo = await fetch(YOUTUBE_CHANNEL_API.replace("CHANNELID_REPLACE",snippet.channelId));
    var json = await channelInfo.json();
    setChannelDwtails(json.items[0]);
  }

  if(channelDwtails.length === 0) return;

  return (
    <div className='w-10/12'>
        <h1 className='text-lg font-bold'>{title}</h1>
        <div className='flex'>
          <img className='h-10 rounded-3xl' src={channelDwtails?.snippet?.thumbnails?.medium?.url} alt='channel-logo' /> 
          <div>
            <h2 className='text-lg font-bold'> {channelTitle} </h2>
            <p>{channelDwtails?.statistics?.subscriberCount/1000} k subscribers</p>
          </div>   
        </div>
    </div>
  )
}

export default CardContentDetails;