import React from 'react';

import './UserProfile.scss';

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className="profile" data-testid="user-profile">
      <div className="container">
        <div className="profile-data">
          <div className="user">
            <div className="user_thumb">
              { avatar.length > 0
                ? <img src={avatar} alt={name}/>
                : <img src='https://images.unsplash.com/photo-1558233043-45af001ed5b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='standard' />
              }
            </div>
            
            {name && (
              <p className="user_name">
                {name}
                <span>@{username}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
};

export default UserProfile;
