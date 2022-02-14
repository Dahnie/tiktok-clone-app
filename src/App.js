import './App.css';
import Video from './component/Video';
import Axios from "./axios"
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [videosData, setVideosData] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const response = await Axios.get("/tiktok/posts")
      setVideosData(response.data)

      // Cleanup function
      return response;
    }
    fetchVideos();
  }, [])

  // console.log(videosData);


  return (
    // BEM naming convention
    <div className="app">
      <div className="app__videos">
        {videosData &&
          videosData.map((data) => (
            <Video url={data.url} channel={data.channel} description={data.description} song={data.song} likes={data.likes} shares={data.shares} comments={data.comments} />
          )
          )}
      </div>

    </div>
  );
}

export default App;