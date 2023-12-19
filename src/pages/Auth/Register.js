import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='auth-box'>
      <form>
        <div className='input-box'>
          <label htmlFor='firstName'>Prenom</label>
          <input type='text' placeholder='Prenom' id='firstName' />
        </div>
        <div className='input-box'>
          <label htmlFor='lastName'>Nom</label>
          <input type='text' placeholder='Nom' id='lastName' />
        </div>
        <div className='input-box'>
          <label htmlFor='email'>Email</label>
          <input type='email' placeholder='hello@gmail.com' id='email' />
        </div>
        <div className='input-box'>
          <label htmlFor='password'>Mot de passe</label>
          <input
            type='password'
            placeholder='Votre mot de passe'
            id='password'
          />
        </div>
        <div className='input-box'>
          <button>S'inscrire</button>
          <span>
            Vous avec un compte ? <Link to='/login'>Se connecter</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
