import React from 'react'

const VideoCard = ({info}) => {
    if(info === null) return;

    const {snippet, statistics } = info;
    const {channelTitle,title, thumbnails } = snippet;
    const {viewCount, likeCount } = statistics;
    
  return (
    <div>
        <div className='m-2 p-2 w-64 shadow-xl'>
            <img className='rounded-lg' alt='v-card' src={thumbnails.medium.url} />
            <ul>
                <li className='text-pretty font-bold'>{title}</li>
                <li>{channelTitle}</li>
                <li>Views - {viewCount}</li>
                <li>Likes - {likeCount}</li>
            </ul>
        </div>
    </div>
  )
}

export default VideoCard;