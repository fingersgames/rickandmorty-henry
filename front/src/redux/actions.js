import { ADD_FAV,REMOVE_FAV,ORDER,FILTER } from "./action-types";
import axios from 'axios'
export const addFav=(character)=>{
    // return { type:ADD_FAV,  payload:character} 
    const endpoint='http://127.0.0.1:3001/rickandmorty/fav'
    return (dispatch) =>{
        axios.post(endpoint,character)
        .then(({data})=>{
            return dispatch({
                type:ADD_FAV,
                payload:data
            })
        })
    }
}
export const removeFav=(id)=>{
    // return {type:REMOVE_FAV, payload:id}
    const endpoint='http://127.0.0.1:3001/rickandmorty/fav/'+id
    return (dispatch) =>{
        axios.delete(endpoint)
        .then(({data})=>{
            return dispatch({
                type:REMOVE_FAV,
                payload:data
            })
        })
    }
}
export const filterCards=(gender)=>{
    return{type:FILTER,payload:gender}
}
export const orderCards=(order)=>{
    return{type:ORDER,payload:order}
}