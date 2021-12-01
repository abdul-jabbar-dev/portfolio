import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navigator from './Componenets/Navigat/Navigator';
import Projects from './Componenets/Projects';
import Blogs from './Pages/Blogs';
import DevAboutMe from './Pages/DevAboutMe';
import Home from './Pages/Home';
import Project from './Pages/Project';

function App() {
  return (
    <div className="App">
      <Navigator></Navigator>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/*" element={< Home />} />
        <Route path="/projects/" element={< Projects />} />
        <Route path="/aboutme/" element={< DevAboutMe />} />
        <Route path="/projects/:id" element={< Project />} />
        <Route path="/blogs" element={< Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
