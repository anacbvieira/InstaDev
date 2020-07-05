import React from 'react';

import { Link } from 'react-router-dom';

const User = ({ infoUser })  => {
  const {avatar, name, username, } = infoUser;

  return (
    <article className="post" data-testid="user">
      <header className="post_header">
        <Link to={`/users/${username}`} className="user">
          <div className="user_thumb">
            {avatar
              ? <img src={avatar} alt ={name} />
              : <img src='https://images.unsplash.com/photo-1558233043-45af001ed5b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='standard' />
            }
          </div>

          <div className="user_name">{name}</div>
        </Link>
      </header>
    </article>
  )
};

export default User;
