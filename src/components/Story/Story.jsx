import React, { useCallback, useState } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  const [metadata, setMetadata] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  const storyProgress = useCallback(() => {
    if (metadata?.duration !== null && currentTime !== null){
      const elapsedTime = ((currentTime / metadata.duration) * 100)

      return `${elapsedTime.toFixed(2)}%`
    }

    return '0%'
  },[metadata, currentTime])
  return (
    <section className="story" data-testid="story">
      <div className="container">
        <header className="story_header">
          <div className="user">
            <Link to={`/users/${user.username}`} className='user_thumb'>
              <img src={user.avatar} alt={user.name}/>
            </Link>

            <Link to={`/users/${user.username}`} className='user_name'>{user.name}</Link>
          </div>
          
          <button className='story_close' onClick={() => handleClose()}>
            <i className='fas fa-times' />
          </button>
        </header>

        <div className="story_progress">
          <div
            style={{ width: storyProgress()}}
            className="story_progress_elapsed"
          >
          </div>
        </div>

        {story.videoUrl && (
          <div className="container">
            <section className='story_video_wrapper'>
              <video
                autoPlay
                className='video-player'
                loop
                playsInline
                onTimeUpdate={e => setCurrentTime(e.target.currentTime)}
                onLoadedMetadata={e => {
                  setMetadata({
                    videoHeight: e.target.videoHeight,
                    videoWidth: e.target.videoWidth,
                    duration: e.target.duration
                  })
                }}
                src={story.videoUrl}
              />
            </section>
          </div>
        )}
      </div>
    </section>
  );
};

export default Story;
