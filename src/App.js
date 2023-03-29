import React, {useEffect, useState} from 'react';
import {getArtwork} from "./Functions/CardMethod.js";
import { 
  BrowserRouter,
  Routes,
  Route,
  } from 'react-router-dom';

import './App.css';

import ContainerArtWorks from './Components/ArWorks/ContainerArtWorks'
import AdminLogin from './Components/AdminLogin/AdminLogin'
import Blog from './Components/Blog/Blog';
import NavBar from './Components/NavBar/NavBar';

function App() {

  const [artworks, setArtworks] = useState([])

  useEffect( () => {

      document.title = "Pepelandia";

      async function loadArtwork() {
          const response = await getArtwork();  
          if (response.status === 200) {
            setArtworks(response.data)
            }
      }
      loadArtwork();
  }, [])

  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route exact path="/blog" element={<Blog/>} />
          <Route exact path="/loginadminmorlacos" element={<AdminLogin/>} />
          <Route exact path="/" element={<ContainerArtWorks artworks={artworks}/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
