import { Outlet } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

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
