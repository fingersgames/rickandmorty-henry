import { useNavigate, useParams } from 'react-router-dom';
import styles from './Detail.module.css'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const Detail=()=>{
    const navigate=useNavigate();
    const {detailId} = useParams();
    const [character,setCharacter]=useState([]);
    useEffect(()=>{
        const URL_BASE='https://be-a-rym.up.railway.app/api'
        const KEY='1359a0baf0ef.3553cb7fc991adca2846'
        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`)
        .then(response=>setCharacter(response.data))
        }
    ,[])
    return(
        <div className={styles.Detail}>
            {
                character.name?
                <>
                    <button className={styles.boton} onClick={()=>navigate('/home')}>x</button>
                    <h3 className={styles.name}>{character.name}</h3>
                    <p>Status: {character.status}</p>
                    <p>Specie: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Origin: {character.origin?.name}</p>
                    <img src={character.image} alt="" />
                </>
                : (
                    <h2>Loading...</h2>
                )
            }
        </div>
    )
}
export default Detail;