import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { Header } from './components/Header/Header';

function App() {

  return (
   <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
   </>
  );
}

export default App;
