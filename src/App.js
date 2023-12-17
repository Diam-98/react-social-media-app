import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Explore from './pages/Explore/Explore';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <Sidebar />
        <div className='container'>
          {/* <Home /> */}
          <Explore />
        </div>
      </div>
    </div>
  );
}

export default App;
