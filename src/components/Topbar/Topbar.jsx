import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../../assets/img/instagram-logo.svg';

import './Topbar.scss';

const Topbar = () => (
  <header className="topbar" data-testid="topbar">
    <div className="container">
      <Link to='/' className='topbar_logo'>
        <LogoSvg alt='Logo Instagram' />
      </Link>

      <div className='topbar_user'>
        <button className='topbar_icon'>
          <Link to='/users'>
            <i className='fas fa-users' />
            <span>Usuários</span>
          </Link>
        </button>

        <button className='topbar_icon'>
          <Link to='/newuser'>
            <i className='fas fa-user-plus' />
            <span>Nova Conta</span>
          </Link>
        </button>
      </div>
    </div>
  </header>
);

export default Topbar;
