import logo from './logo.png';
import './App.css';
import React from 'react';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import Projects from './pages/projects';
import Resume from './pages/resume';
import './components/navbar.css';

function App() {
  return (

    <div className="App">
      <header className="App-header">
          <Router>
              <Navbar />
              <Routes>
                  <Route exact path='/' exact element={<Home />} />
                  <Route path='/about' element={<About/>} />
                  <Route path='/resume' element={<Resume/>} />
                  <Route path='/blogs' element={<Blogs/>} />
                  <Route path='/projects' element={<Projects/>} />
              </Routes>
          </Router>
          <img src={logo} className="App-logo" alt="logo" />

      </header>

    </div>
  );
}

export default App;
