const KEY = import.meta.env.VITE_API_KEY;
export const API_Video="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key="+KEY;

export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=googlecrome&ds=yt&q="