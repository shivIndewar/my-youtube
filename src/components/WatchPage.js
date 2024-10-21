import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_DETAILS } from "../utils/constants";
import CardContentDetails from "./CardContentDetails";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log("search params", searchParams.get("v"));
  const [videoDetails, setVideoDetails] = useState([]);
  
  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
  }, []);

  const getVideoDetails = async ()=>{
    const data = await fetch(YOUTUBE_VIDEO_DETAILS.replace("VIDEOID", searchParams.get("v")));
    const json = await data.json();
    setVideoDetails(json.items[0]);
  }

  if(videoDetails.length === 0) return
  return (
    <div className="flex flex-col w-full">
    <div className="px-5 flex">
      <div>
        <iframe
          className="rounded-lg"
          width="760"
          height="415"
          src={"https://www.youtube.com/embed/"+searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
         <div>
          <CardContentDetails cardDetails={videoDetails} />
      </div>
      </div>
      <div className="w-full">
        <LiveChat />
      </div>  
    </div>
    <Comments/>
  </div>
  );
};

export default WatchPage;
