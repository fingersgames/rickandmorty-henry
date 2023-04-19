import styles from './SearchBar.module.css'
import {useState} from 'react'
export default function SearchBar({onSearch}) {
   const [id, setId] = useState("")
   const handleChange=(event)=>{
      setId(event.target.value)
   }
   const handleSubmit=(event)=>{
      event.preventDefault();
      
   }
   return (
      <div className={styles.search}>
         <form onSubmit={handleSubmit}>

         <input placeholder='Numero del 1 al 826'
            type='search'
            className={styles.searchInput}
            onChange={handleChange} 
         />
         <button type='submit' onClick={()=>{onSearch(id)}}>Agregar</button>  
         </form>
      </div>
   );
}
