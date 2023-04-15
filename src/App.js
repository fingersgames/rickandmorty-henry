import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
// import Stats from './components/Stats.jsx';
import { useEffect, useState } from "react";
import About from './components/About'
import Detail from './components/Detail'
import { Routes, Route,useLocation, useNavigate} from 'react-router-dom';
import FormNew from './components/FormNew.jsx'
import React from 'react';
function App() {
  const email='a@a.com'
  const pass='111111'
  const location = useLocation();
  const navigate = useNavigate();  
  const [characters, setCharacters] = useState([]);
  const [access,setAccess]=useState(false)
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
    console.log(characters)
  };
 const login=(userData)=>{
    if (userData.username===email && userData.password===pass){
      setAccess(true)
      navigate('/home')
    }
  }
  const logout=()=>{
    setAccess(false)
  }
  function onSearch(id) {
    const URL_BASE='https://be-a-rym.up.railway.app/api'
    const KEY='1359a0baf0ef.3553cb7fc991adca2846'
    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);  

        } else {
          alert("Algo salió mal");
        }
      });
  }
  
 
  useEffect(() => {
    !access && navigate('/')
  }, [access]);

  return (
    <div className='App'>
      {location.pathname!='/' ? <Nav onSearch={onSearch} logout={logout}/> : null}
      <Routes>
        <Route
          path='/' element={<FormNew login={login}/>}
        />
        <Route 
          path='/home' element={<Cards characters={characters} onClose={onClose}/>}
        />
        <Route 
          path='/about' element={<About></About>}
        />
        <Route 
          path='/detail/:detailId' element={<Detail />}
        />  
      </Routes>
      


      
      
      {/* <Stats /> */}

    </div>
  )
}

export default App





