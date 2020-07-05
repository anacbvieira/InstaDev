import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [users, setUsers] = useState([])
  const [stories, setStories] = useState([])
  const [posts, setPosts] = useState([]);
  const [usersPosts, setusersPosts] = useState(0);
  const getUserPostById = (postUserId) => users.find(user => postUserId === user.id)

  useEffect(() => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')
      .then((res) => res.json())
      .then(data => setUsers(data))
  }, []);
  
  useEffect(() => {

    if (usersPosts === users.length) {
      return;
    }

    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[usersPosts].id}/posts`)
      .then((resp) => resp.json())
      .then( data => {
        setPosts([...posts, ...data]);
        setusersPosts(usersPosts + 1)
      })
  }, [users, usersPosts])

  useEffect(() => {
    fetch('	https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories')
      .then((resp) => resp.json())
      .then( data => setStories(data))
  },[users])
  
  return (
    <div data-testid="feed-route">
      {(users.length > 0 && stories.length > 0) && (
        <Stories
          stories={stories}
          getUserHandler={getUserPostById}
        />
      )}

      {users.length !== usersPosts
        ? (<Loading />)
        : (<Posts
          posts={posts}
          getUserHandler={getUserPostById}
        />)
      }
    </div>
  );
};

export default FeedRoute;
