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
        const URL_BASE='http://127.0.0.1:3001/rickandmorty'
        // const KEY='1359a0baf0ef.3553cb7fc991adca2846'
        axios(`${URL_BASE}/character/${detailId}/detail`)
        .then(response=>setCharacter(response.data))
        }
    ,[])
    return(
        <div className={styles.Detail}>
            {
                character.name?
                <>
                    <button className={styles.boton} onClick={()=>navigate('/home')}>x</button>
                    <div className={styles.cardTitle}>{character.name}</div>
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