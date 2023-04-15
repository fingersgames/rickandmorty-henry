import styles from './SearchBar.module.css'
import {useState} from 'react'
export default function SearchBar({onSearch}) {
   const [id, setId] = useState("")
   const handleChange=(event)=>{
      setId(event.target.value)
   }
   return (
      <div className={styles.search}>
         <input 
            type='search'
            className={styles.searchInput}
            onChange={handleChange} 
         />
         <button onClick={()=>{onSearch(id)}}>Agregar</button>
      </div>
   );
}
