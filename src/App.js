import { Outlet } from 'react-router';
import './App.css';
import UserCard from './components/Card/UserCard';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Explore from './pages/Explore/Explore';
import Favorit from './pages/Favorits/Favorit';
import Home from './pages/Home/Home';
import Network from './pages/Network/Network';
import CreatePost from './pages/Post/CreatePost';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <Sidebar />
        <div className='container'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
