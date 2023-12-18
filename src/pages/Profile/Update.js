import React from 'react';
import profile from '../../images/robot-avatar.png';

const Update = () => {
  return (
    <div className='profile'>
      <h2>Modifier Profile</h2>
      <div className='profile-form'>
        <form>
          <div className='existing-image'>
            <img src={profile} alt='profile' />
            <input type='file' />
          </div>
          <div className='form-input'>
            <label htmlFor='fistName'>Prenom</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              placeholder='Prenom'
            />
          </div>
          <div className='form-input'>
            <label htmlFor='lastName'>Nom</label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              placeholder='Nom'
            />
          </div>
          <div className='form-input'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' placeholder='Email' />
          </div>
          <div className='form-input'>
            <label htmlFor='bio'>Bio</label>
            <textarea name='bio' id='bio' placeholder='Biographie'></textarea>
          </div>
          <button htmlType='submit'>Modifier</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
