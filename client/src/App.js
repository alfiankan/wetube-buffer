import React, { useState } from 'react';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';

function App() {
  const [videoUrl, setVideoUrl] = useState('http://127.0.0.1:5000/videos/every-summertime/manifest.mpd')
  
  return  <div>
            <div style={{padding:50}}>
              <ShakaPlayer autoPlay height='360' src={videoUrl} />
            </div>
            <div>
              <h3 style={{paddingLeft:20}}>Play List</h3>
              <ul>
                <li style={{padding:5}}>
                  <a 
                    href='#' 
                    onClick={() => {
                      setVideoUrl('http://127.0.0.1:5000/videos/every-summertime/manifest.mpd')
                      }
                    }>
                    Every Summertime
                  </a>
                </li>
                <li style={{padding:5}}>                  
                  <a 
                    href='#' 
                    onClick={() => {
                      setVideoUrl('http://127.0.0.1:5000/videos/iloveu-so/manifest.mpd')
                      }
                    }>
                    Tonigh Show
                  </a></li>
              </ul>
            </div>
          </div>;
}


export default App;
