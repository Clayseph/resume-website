import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import 'react-pro-sidebar/dist/css/styles.css';
import About from './pages/About';
import SideBar from './components/Sidebar';
import linkedInIcon from './LinkedIn.png'

function App() {
  return (
    <div className="App">
      <BrowserRouter >

        <SideBar/>
        <div className="page">
          <div className="content">
            <Routes >
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
            </Routes>
          </div>
          <div className="footer">
            <a href="https://www.linkedin.com/in/clayton-yarborough-3038bb68/" target="_blank">
              <img className="icon" src={linkedInIcon}/>
            </a>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
