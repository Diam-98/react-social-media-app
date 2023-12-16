import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './containers/Home';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <Sidebar />
        <div className='container'>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
