import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';
import Network from './pages/Network/Network';
import Favorit from './pages/Favorits/Favorit';
import CreatePost from './pages/Post/CreatePost';
import Update from './pages/Profile/Update';
import Profile from './pages/Profile/Profile';
import PostDetails from './pages/Post/PostDetails';
import AuthLayout from './pages/Auth/AuthLayout';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<AuthLayout />}>
        <Route index='/login' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
      <Route path='/home' element={<App />}>
        <Route index='/home' element={<Home />} />
        <Route path='/home/explore' element={<Explore />} />
        <Route path='/home/network' element={<Network />} />
        <Route path='/home/favorits' element={<Favorit />} />
        <Route path='/home/post/create' element={<CreatePost />} />
        <Route path='/home/post/detail/:slug' element={<PostDetails />} />
        <Route path='/home/profile' element={<Profile />} />
        <Route path='/home/profile/edit' element={<Update />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
