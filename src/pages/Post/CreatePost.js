import React from 'react';
import './createPost.css';

const CreatePost = () => {
  return (
    <div className='create-post'>
      <h2>Creer un nouveau post</h2>
      <div className='form'>
        <form>
          <div className='input-box'>
            <label htmlFor='description'>Description</label>
            <textarea placeholder='Contenu du post' id='description'></textarea>
          </div>
          <div className='input-box'>
            <input type='file'></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
