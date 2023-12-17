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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/home' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/network' element={<Network />} />
        <Route path='/favorits' element={<Favorit />} />
        <Route path='/post/create' element={<CreatePost />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/edit' element={<Update />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
