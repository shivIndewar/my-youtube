
const YOUTUBE_KEY = "AIzaSyBBzNUCgSy-DDuR0GcGZUnvRNpnI3ORmR4";
export const YOUTUBE_VIDEOS_API ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + YOUTUBE_KEY;
export const YOUTUBE_VIDEO_DETAILS = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=VIDEOID&key="+ YOUTUBE_KEY;
export const YOUTUBE_CHANNEL_API = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=CHANNELID_REPLACE&key="+YOUTUBE_KEY;
export const YOUTUBE_SEARCH_SUGGESTION = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_GLOBAL_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=SEARCHKEYWORDS&key="+YOUTUBE_KEY;