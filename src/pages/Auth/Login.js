import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate('/home');
  };

  return (
    <div className='auth-box'>
      <form>
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
          <button onClick={home}>Se connecter</button>
          <span>
            Pas de compte ? <Link to='/register'>S'inscire</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
