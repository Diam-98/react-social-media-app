import './App.css';
import UserCard from './components/Card/UserCard';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Explore from './pages/Explore/Explore';
import Home from './pages/Home/Home';
import Network from './pages/Network/Network';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <Sidebar />
        <div className='container'>
          {/* <Home /> */}
          {/* <Explore /> */}
          <Network />
        </div>
      </div>
    </div>
  );
}

export default App;
