import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import 'react-pro-sidebar/dist/css/styles.css';
import About from './pages/About';
import SideBar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter >

        <SideBar/>

        <Routes >
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
