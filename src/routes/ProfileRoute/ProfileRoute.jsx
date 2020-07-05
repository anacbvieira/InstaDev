import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

const ProfileRoute = () => {
  const [id, setUserId] = useState('')
  const [avatar, setAvatar] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [userPosts, setUserPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const { pathname } = window.location
    const param = pathname.split("/")[2]

    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?search=${param}`)
      .then(resp => resp.json())
      .then( userData => {
        setUserId(userData[0].id);
        setAvatar(userData[0].avatar);
        setName(userData[0].name);
        setUsername(userData[0].username);
      })
  }, [])

  useEffect(() => {
    if(id){
      fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${id}/posts`)
        .then(resp => resp.json())
        .then( posts => {
          setUserPosts(posts);
          setIsLoading(false)
        })
    }
  }, [id] )
  return (
    <div data-testid="profile-route">
      <UserProfile
        avatar={avatar}
        name={name}
        username={username}
      />
     {isLoading
      ? <Loading />
      : <UserPosts posts={userPosts} />
    }
    </div>
  );
};

export default ProfileRoute;
