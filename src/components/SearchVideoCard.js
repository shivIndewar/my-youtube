import React from 'react'

const SearchVideoCard = ({searchedVideos}) => {
     const {snippet } = searchedVideos;
     const {channelTitle,title, thumbnails } = snippet;
  return (
    <div>
    <div className='m-2 p-2 w-64 shadow-xl'>
        <img className='rounded-lg' alt='v-card' src={thumbnails.medium.url} />
        <ul>
            <li className='text-pretty font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li></li>
        </ul>
    </div>
</div>
  )
}

export default SearchVideoCard;