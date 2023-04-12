import { Route, Routes } from 'react-router-dom';
import './App.css';
import EditProfile from './Componenets/Admin/AdminComponents/EditProfile';
import MailsMaintain from './Componenets/Admin/AdminComponents/MailsMaintain';
import ProjectsMaintain from './Componenets/Admin/AdminComponents/ProjectsMaintain';
import SettingsPage from './Componenets/Admin/AdminComponents/SettingsPage';

import Navigator from './Componenets/Navigat/Navigator';
import Projects from './Componenets/Projects';
import Admin from './Pages/Admin';
import AdminLogin from './Pages/AdminLogin';
import AuthonticationPage from './Pages/AuthonticationPage';
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
        <Route path="/adminlogin" element={< AdminLogin />} />
        <Route path="/admin" element={< AuthonticationPage ><Admin /></AuthonticationPage>} >
          <Route path="notification" element={<MailsMaintain />} />
          <Route path="projects" element={<ProjectsMaintain />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="editprofile" element={<EditProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
