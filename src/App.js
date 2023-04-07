import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Dashboard from "./Dashboard";
import Acount from "./Acount";
import Setting from "./Setting";


function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
       
       
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="Dashboard" >
          <Route index element={<Dashboard />} />
          <Route path="Acount/:id" element={<Acount />} />
          <Route path="Setting" element={<Setting />} />
        </Route>
        <Route path="/*" element={<NotFound/>}/>
        
      

      </Routes>
      <Navbar/>
    </BrowserRouter>
 
    </>
  );
}

export default App;
