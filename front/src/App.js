import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
// import Stats from './components/Stats.jsx';
import { useEffect, useState } from "react";
import About from './components/About'
import Detail from './components/Detail'
import { Routes, Route,useLocation, useNavigate} from 'react-router-dom';
import FormNew from './components/FormNew.jsx'
import Favorites from './components/Favorites';
import React from 'react';
import { connect } from 'react-redux';
import { removeFav } from './redux/actions';
import axios from 'axios';
function App({removeFav}) {
  // const email='a@a.com'
  // const pass='111111'
  const location = useLocation();
  const navigate = useNavigate();  
  const [characters, setCharacters] = useState([]);
  const [access,setAccess]=useState(false)
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
    console.log(characters)
    removeFav(id)
  };
  const login=(userData)=>{
    const {username,password}=userData
    const email=username
    const URL ='http://127.0.0.1:3001/rickandmorty/login'
    axios(URL+'?email='+email+'&password='+password)
    .then(({data})=>{
      const {access}=data
      setAccess(access)
      access && navigate('/home')
    })
  }
  const logout=()=>{
    setAccess(false)
  }
  function onSearch(id) {
    const URL_BASE='http://127.0.0.1:3001/rickandmorty' //'https://be-a-rym.up.railway.app/api'
    // const KEY='1359a0baf0ef.3553cb7fc991adca2846'
  
    if (characters.find((char) => char.id == id)) {//le cambie el === por el == por que el id de la pagina anterior era string y este es num
      return alert("Personaje repetido");
    }


    axios(`${URL_BASE}/character/${id}`)
    .then(response=>{
      const data=response.data
      console.log(data)
      if (data.name) {

        setCharacters((oldChars) => [...oldChars, data]);  

      } else {
        return alert("Algo salió mal");
      }
    })
    // el fetch da error cuando paso el server pasa un data vacio y se rompe, el axios no.
    // para el fetch hay que pasar si o si un json vacioi aunque sea para que no se rompa
    // igual con el axios ni con el fetch se pueden recibir un text/plain, ver como hacer eso
    // fetch(`${URL_BASE}/character/${id}`)//?key=${KEY}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data)
    //     if (data.name) {

    //       setCharacters((oldChars) => [...oldChars, data]);  

    //     } else {
    //       return alert("Algo salió mal");
    //     }
    //   });  
  }
  
 
  useEffect(() => {
    !access && navigate('/')
  }, [access]);

  return (
    <div className='App'>
      {location.pathname!=='/' ? <Nav onSearch={onSearch} logout={logout}/> : null}
      <Routes>
        <Route
          path='/' element={<FormNew login={login}/>}
        />
        <Route
          path='/favorites' element={<Favorites onClose={onClose} />}
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
    </div>
  )
}
const mapDispatchToProp=(dispatch)=>{
  return {
    removeFav: (id)=>{dispatch(removeFav(id))}
  }
}
export default connect(null,mapDispatchToProp)(App)





