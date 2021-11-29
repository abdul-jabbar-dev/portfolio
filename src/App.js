import './App.css';
import Developer from './Componenets/Developer';
import About from './Componenets/About';
import Projects from './Componenets/Projects';
import Contacts from './Componenets/Contacts';

function App() {
  return (
    <div className="App">
      <Developer></Developer>
      <About ></About>
      <Projects></Projects>
      <Contacts></Contacts>
    </div>
  );
}

export default App;
