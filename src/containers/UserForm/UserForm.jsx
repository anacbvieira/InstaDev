import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage'
import UserProfile from '../../containers/UserProfile'

import './UserForm.scss';

const UserForm = () => {
  const [name, setName] = useState('Scott')
  const [avatar, setAvatar] = useState('')
  const [username, setUserName] = useState('scottonisson')
  const [email, setEmail] = useState('brownie@gmail.com')
  const [submit, setSubmit] = useState(false)

  const handleSetName = (event) => {
    const {value} = event.target
    setName(value)
  }

  const handleSetAvatar = (event) => {
    const {value} = event.target
    setAvatar(value)
  }

  const handleSetUserName = (event) => {
    const {value} = event.target
    setUserName(value)
  }

  const handleSetEmail = (event) => {
    const {value} = event.target
    setEmail(value)
  }

  const handleAddUser = (event) => {
    event.preventDefault()
    const addUser = JSON.stringify({
      name,
      avatar,
      username,
      email
    })

    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users', {
      method:"PUT",
      headers:{
        'Content-Type': 'application/json'
      },
      body: addUser
    })
      .then(() => setSubmit(true))
  }

  return (
    <React.Fragment>
      <div data-testid="user-form">
        <UserProfile
          avatar={avatar}
          name={name}
          username={username}
        />
      </div>
      <div className="post_form">
        <div className="container">
          <div className="post_form_wrapper">
            <label>Nome</label>
            <input
              type="text"
              value={name}
              onChange={(event) => handleSetName(event)}
            />

            <label>Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(event) => handleSetUserName(event)}
            />

            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(event) => handleSetEmail(event)}
            />
            
            <label>Url da imagem de Perfil (use a URL da imagem do LinkedIn)</label>
            <input
              type="text"
              placeholder="http://..."
              value={avatar}
              onChange={(event) => handleSetAvatar(event)}
            />

            <button
              type="button"
              onClick={(event) => handleAddUser(event)}
            >
              Cadastrar
            </button>
          </div>
        </div>
      </div>
      {submit && (<SuccessMessage />)}
    </React.Fragment>
  );
};

export default UserForm;
