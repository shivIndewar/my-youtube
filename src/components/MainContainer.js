import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import SearchVideoContainer from './SearchVideoContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { removeGlobalSearch } from '../utils/globalSearchSlice';

const MainContainer = () => {
  
  const globalSR = useSelector((store)=> store.global);
  const dispatch = useDispatch();
  useEffect(()=>{

    return ()=>{
      console.log("called return of dispatch");
      dispatch(removeGlobalSearch(null));
    }
  },[]);


  return (
    <div className='' >
        <ButtonList />
         {!globalSR.globalSearch && <VideoContainer YOUTUBEVIDEO_API={YOUTUBE_VIDEOS_API} />}
        { globalSR.globalSearch && <SearchVideoContainer /> }
    </div>
  )
}

export default MainContainer;