import React, { useEffect, useState } from 'react'
import { YOUTUBE_GLOBAL_SEARCH_API } from '../utils/constants';
import SearchVideoCard from './SearchVideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SearchVideoContainer = () => {
    const [searchResult, setSearchResult] = useState([]);
    const globalSearch = useSelector((store)=> store.global);
    useEffect(()=>{
        getSearchResult();
    },[]);

    const getSearchResult = async ()=>{
        const searchResult = await fetch(YOUTUBE_GLOBAL_SEARCH_API.replace("SEARCHKEYWORDS",globalSearch.globalSearch));
        const json = await searchResult.json();
        setSearchResult(json.items);
    }

    if(searchResult.length === 0) return;

  return (
    <div className='flex flex-wrap'>
        {
            searchResult.map((sr, index)=> <Link key={sr.id.videoId} to={"watch?v="+sr.id.videoId}><SearchVideoCard searchedVideos={sr} /> </Link>)
        }
    </div>
  )
}

export default SearchVideoContainer;