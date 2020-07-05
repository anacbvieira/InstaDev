import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);
  const [selectedStory, setSelectedStory] = useState({});
  const [selectedProfile, setSelectedProfile] = useState({});
  const findStoryById = (id) => stories.find(story => story.id === id);

  const handleStory = (story) => {
    const displayStory = findStoryById(story.id)
    const profileData = getUserHandler(story.userId)

    setSelectedStory(displayStory)
    setSelectedProfile(profileData)
    setShowStory(!showStory)
  }

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.map((story, index) => {
            const profileData = getUserHandler(story.userId)

            return (
              <button
                key={story.id}
                onClick={() => handleStory(story)}
                className={`user_thumb ${index === 0 && 'user_thumb--hasNew'}`}
                >
                  <div className="user_thumb_wrapper">
                    <img src={profileData.avatar} alt={profileData.name}/>
                  </div>
                </button>
            )
          })}
        </div>
      </section>

      {showStory && (
        <Story
          story={selectedStory}
          user={selectedProfile}
          handleClose={() => setShowStory(!showStory) }
           />
        )}
    </React.Fragment>
  );
};

export default Stories;
