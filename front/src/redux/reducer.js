import { ADD_FAV,FILTER,ORDER,REMOVE_FAV } from "./action-types";
const initialState={
    myFavorites:[],
    allFavorites:[]
}

const reducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                // myFavorites:[...state.allFavorites, payload ],
                // allFavorites:[...state.allFavorites, payload ]
                myFavorites:payload,
                allFavorites:payload

            }
        case REMOVE_FAV:
            return {
                ...state,
                // allFavorites: state.allFavorites.filter(fav=>fav.id!=payload),
                // myFavorites: state.allFavorites.filter(fav=>fav.id!=payload)
                myFavorites:payload,
                allFavorites:payload
            }
        case FILTER:
            return {
                ...state,
                myFavorites:
                payload==='x'? state.allFavorites:
                state.allFavorites.filter(favFilter=>favFilter.gender===payload)
            }
        case ORDER:
            let copy=[...state.myFavorites]
            if (payload==='A') 
                copy.sort((a,b)=> a.id - b.id)
            else if (payload==='D') 
                copy.sort((a,b)=> b.id - a.id)
            else copy=[...state.allFavorites]
            return {
                ...state,
                myFavorites:copy
            }
        default:
            return{...state}
    }
}

export default reducer;