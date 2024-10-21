import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTION } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { globalSearch, removeGlobalSearch } from "../utils/globalSearchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCach = useSelector((store) => store.search); 
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(()=>{
     const timer = setTimeout(()=> {
        if(searchCach[searchQuery]){
            setSuggestions(searchCach[searchQuery]);
        }
        else{
            getSuggestions()
        }
    
    }, 200);
    // getSuggestions()
     return () => {
         clearTimeout(timer);
    }

  },[searchQuery]);

  const getSuggestions = async ()=>{
    const suggestions = await fetch(YOUTUBE_SEARCH_SUGGESTION +searchQuery);
    const json = await suggestions.json();
    setSuggestions(json[1]);
    dispatch(
        cacheResults({ 
        [searchQuery] : json[1]
    })
    );
  }

  const handleSearchClick = (searcedValue) =>{
      setSearchQuery(searcedValue);
      if(searcedValue){
        dispatch(globalSearch(searcedValue));
    }else{
      dispatch(removeGlobalSearch());
    }
    setShowSuggestions(false)
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToBRP_sFEuZ6VCwq601at0KzWioZkD__eRfw&s"
          alt="menu"
        />
        <img
          className="h-8 mx-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpU72_HWxQEo9j-Gv3LO-zXW14dRPDSzjHg&s"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10 px-10">
       <div>
        <input
          className="w-1/2 border border-gray-400 rounded-l-full p-2"
          type="text"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
        />
        <button className="border border-gray-400 rounded-r-full px-2 py-2 bg-gray-100">
          🔍
        </button>
        </div>
        {
            suggestions.length > 0 && showSuggestions && (
        <div className="py-2 px-2 absolute bg-white w-[27rem] rounded-lg shadow-lg border border-gray-200 ">
            <ul>
                {
                    suggestions.map((s)=> <li onClick={(e)=> handleSearchClick(s)} key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 {s}</li>)
                }

            </ul>
        </div>
      )}
      </div>
      
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Header;
