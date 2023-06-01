import { useEffect } from "react";
import Cards from "./Cards";
import { connect,useDispatch } from "react-redux";
import { orderCards,filterCards } from "../redux/actions";
import styles from './Favorites.module.css'
const Favorites=({myFavorites, onClose})=>{
    const dispatch=useDispatch();
    const handleFilter=(event)=>{
        console.log(event.target.value)
        dispatch(filterCards(event.target.value))
        console.log('dispatch filter')
    }
    const handleOrder=(event)=>{
        dispatch(orderCards(event.target.value))
    }
    return (
        <>
        <div className={styles.filtros}>
        <label htmlFor="order">Ordenar por: &nbsp; </label>
        <select id="order"  onChange={handleOrder} defaultValue='B'>
            <option value="B" disabled hidden></option>
            <option value="x">Ninguno</option>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>
       
        <label htmlFor="filter">&nbsp; Filtrar por: &nbsp;</label>
        <select id="filter"  onChange={handleFilter} defaultValue='B'>
            <option value="B" disable hidden></option>
            <option value="x">Ninguno</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select> 
        </div>
        <Cards characters={myFavorites} onClose={onClose}/>
        </>
    )
    
}
const mapStateToProps=(state)=>{
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites);