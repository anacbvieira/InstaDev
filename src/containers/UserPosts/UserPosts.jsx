import React from 'react';

import Post from '../../components/Post';

import './UserPosts.scss';

const UserPosts = ({ posts }) => (
  <div className="container" data-testid="user-posts">
    <section className="user-post">
        {posts.length > 0 
          ? posts.map((post) => (
            <Post
              key={post.id}
              postInfo={post}
              />
          ))
          : (
            <div className="no-posts">
              <span className="no-posts_content">Usuario sem publicações</span>
              <span className="no-posts_emoji" role="img" aria-label="Emoji Triste">😥</span>
            </div>
          )
        }  
    </section>
  </div>
);

export default UserPosts;
